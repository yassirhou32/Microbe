"use client";

import React, { useEffect, useRef, useState } from "react";

interface TopoProps {
  baseColor?: string;
  lineColor?: string;
  speed?: number;
  complexity?: number;
  className?: string;
}

const VERTEX_SHADER = `
  attribute vec2 position;
  attribute vec2 uv;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0, 1);
  }
`;

const FRAGMENT_SHADER = `
  precision highp float;

  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform vec3 uBaseColor;
  uniform vec3 uLineColor;
  uniform float uSpeed;
  uniform float uComplexity;

  varying vec2 vUv;

  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m; m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 a0 = x - floor(x + 0.5);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.y > 1.0 ? uResolution.x / uResolution.y : 1.0;
    vec2 p = uv;
    p.x *= aspect;

    float pulse = sin(uTime * uSpeed * 2.0) * 0.1 + 0.9;

    float mouseDist = distance(uv, uMouse);
    float gravity = smoothstep(0.6, 0.0, mouseDist);
    p += (uMouse - uv) * gravity * 0.2;

    float noiseVal = snoise(p * uComplexity + uTime * uSpeed * 0.2);
    float bands = fract(noiseVal * 4.0);
    float line = smoothstep(0.45, 0.5, bands) - smoothstep(0.5, 0.55, bands);

    line *= pulse;
    line *= 0.5 + gravity;

    vec3 color = mix(uBaseColor, uLineColor, line);

    float grain = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453) * 0.05;
    color += grain;

    gl_FragColor = vec4(color, 1.0);
  }
`;

function hexToRgb01(hex: string): [number, number, number] {
  const h = hex.replace("#", "").trim();
  const n = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  if (!Number.isFinite(n)) return [0, 0, 0];
  const r = ((n >> 16) & 255) / 255;
  const g = ((n >> 8) & 255) / 255;
  const b = (n & 255) / 255;
  return [r, g, b];
}

function compileShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const sh = gl.createShader(type);
  if (!sh) return null;
  gl.shaderSource(sh, source);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    if (typeof console !== "undefined" && process.env.NODE_ENV === "development") {
      console.error("[UiloraTopographicPulse] shader:", gl.getShaderInfoLog(sh));
    }
    gl.deleteShader(sh);
    return null;
  }
  return sh;
}

function createProgram(
  gl: WebGLRenderingContext,
  vertexSrc: string,
  fragmentSrc: string
): WebGLProgram | null {
  const vs = compileShader(gl, gl.VERTEX_SHADER, vertexSrc);
  const fs = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSrc);
  if (!vs || !fs) return null;
  const prog = gl.createProgram();
  if (!prog) {
    gl.deleteShader(vs);
    gl.deleteShader(fs);
    return null;
  }
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  gl.deleteShader(vs);
  gl.deleteShader(fs);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    if (typeof console !== "undefined" && process.env.NODE_ENV === "development") {
      console.error("[UiloraTopographicPulse] program:", gl.getProgramInfoLog(prog));
    }
    gl.deleteProgram(prog);
    return null;
  }
  return prog;
}

const UiloraTopographicPulse: React.FC<TopoProps> = ({
  baseColor = "#050505",
  lineColor = "#333333",
  speed = 0.4,
  complexity = 1.5,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0.5, y: 0.5 });
  const targetMousePos = useRef({ x: 0.5, y: 0.5 });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    setIsReady(false);

    const canvas = document.createElement("canvas");
    canvas.style.display = "block";
    canvas.style.position = "absolute";
    canvas.style.inset = "0";
    canvas.style.zIndex = "1";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    const gl = canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      premultipliedAlpha: false,
      powerPreference: "high-performance",
    });
    if (!gl) {
      return;
    }

    const program = createProgram(gl, VERTEX_SHADER, FRAGMENT_SHADER);
    if (!program) {
      return;
    }

    const positionLoc = gl.getAttribLocation(program, "position");
    const uvLoc = gl.getAttribLocation(program, "uv");

    const positionBuf = gl.createBuffer();
    const uvBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, uvBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 2, 0, 0, 2]), gl.STATIC_DRAW);

    const uTime = gl.getUniformLocation(program, "uTime");
    const uResolution = gl.getUniformLocation(program, "uResolution");
    const uMouse = gl.getUniformLocation(program, "uMouse");
    const uBaseColor = gl.getUniformLocation(program, "uBaseColor");
    const uLineColor = gl.getUniformLocation(program, "uLineColor");
    const uSpeedLoc = gl.getUniformLocation(program, "uSpeed");
    const uComplexityLoc = gl.getUniformLocation(program, "uComplexity");

    const base = hexToRgb01(baseColor);
    const line = hexToRgb01(lineColor);

    containerRef.current.appendChild(canvas);

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(program);
      if (uResolution) gl.uniform2f(uResolution, Math.max(1, w), Math.max(1, h));
    };

    window.addEventListener("resize", resize);
    resize();
    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.STENCIL_TEST);
    gl.clearColor(0, 0, 0, 1);

    const onMouseMove = (e: MouseEvent) => {
      targetMousePos.current.x = e.clientX / window.innerWidth;
      targetMousePos.current.y = 1.0 - e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", onMouseMove);

    let requestId: number;
    let didSetReady = false;
    const draw = (t: number) => {
      requestId = requestAnimationFrame(draw);

      const m = mousePos.current;
      const tm = targetMousePos.current;
      m.x += (tm.x - m.x) * 0.05;
      m.y += (tm.y - m.y) * 0.05;

      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuf);
      gl.enableVertexAttribArray(positionLoc);
      gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);
      gl.bindBuffer(gl.ARRAY_BUFFER, uvBuf);
      gl.enableVertexAttribArray(uvLoc);
      gl.vertexAttribPointer(uvLoc, 2, gl.FLOAT, false, 0, 0);

      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uResolution) {
        gl.uniform2f(uResolution, Math.max(1, window.innerWidth), Math.max(1, window.innerHeight));
      }
      if (uMouse) gl.uniform2f(uMouse, m.x, m.y);
      if (uBaseColor) gl.uniform3f(uBaseColor, base[0], base[1], base[2]);
      if (uLineColor) gl.uniform3f(uLineColor, line[0], line[1], line[2]);
      if (uSpeedLoc) gl.uniform1f(uSpeedLoc, speed);
      if (uComplexityLoc) gl.uniform1f(uComplexityLoc, complexity);

      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (!didSetReady) {
        didSetReady = true;
        setIsReady(true);
      }
    };
    requestId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(requestId);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
      if (containerRef.current?.contains(canvas)) {
        containerRef.current.removeChild(canvas);
      }
      gl.deleteProgram(program);
      gl.deleteBuffer(positionBuf);
      gl.deleteBuffer(uvBuf);
    };
  }, [baseColor, lineColor, speed, complexity]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none fixed inset-0 z-0 isolate h-full w-full bg-black ${className}`}
    >
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-500 ease-out ${
          isReady ? "pointer-events-none opacity-[0.08]" : "opacity-100"
        }`}
        aria-hidden
        style={{
          backgroundColor: "#000",
          backgroundImage: [
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.04) 2px, rgba(255,255,255,0.04) 3px)",
            "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 3px)",
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,255,255,0.07) 0%, transparent 55%)",
            "repeating-radial-gradient(circle at 25% 35%, transparent 0 22px, rgba(255,255,255,0.14) 23px 25px)",
            "repeating-radial-gradient(circle at 72% 58%, transparent 0 26px, rgba(255,255,255,0.12) 27px 30px)",
          ].join(", "),
        }}
      />
    </div>
  );
};

export default UiloraTopographicPulse;
