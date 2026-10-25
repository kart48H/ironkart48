'use client';

/*
 * Fond « en trame » : section inscription (lumière en bas, l'aube) et section Le défi (lumière en haut, le crépuscule).
 * Adapté du composant « Halftone Flow » : même fluide en points de trame,
 * réécrit en WebGL natif (sans iframe ni scripts externes), aux couleurs Iron Kart :
 * nuit → rouille → jaune, plus lumineux en bas comme un lever de soleil sur l'horizon.
 * Ne tourne que lorsque la section est à l'écran ; image fixe si moins d'animations.
 */
import { useEffect, useRef } from 'react';

const VERT = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
const FRAG = `
precision highp float;
uniform vec2 res;
uniform float time;
uniform float grid;
uniform float glowTop;
mat2 rot(float a){float s=sin(a),c=cos(a);return mat2(c,-s,s,c);}
void main(){
  vec2 uv=gl_FragCoord.xy/res;
  vec2 p=uv*2.-1.;
  p.x*=res.x/res.y;
  vec2 f=p;
  float t=time*.35;
  for(float i=1.;i<4.;i++){
    f*=rot(t*.1);
    f.x+=sin(f.y*2.*i+t)*.5;
    f.y+=cos(f.x*1.5*i-t*.8)*.5;
  }
  float k=sin(f.x*2.+f.y*3.)*.5+.5;
  float v=mix(uv.y,1.-uv.y,glowTop);
  k*=mix(1.05,.35,v);
  vec3 night=vec3(.039,.043,.063);
  vec3 rust=vec3(.62,.25,.11);
  vec3 sun=vec3(1.,.784,.118);
  vec3 col=mix(night,rust,smoothstep(.2,.6,k));
  col=mix(col,sun,smoothstep(.68,1.,k));
  vec2 cell=fract(gl_FragCoord.xy/grid)-.5;
  float r=k*.46;
  float dotm=smoothstep(r,r-.12,length(cell));
  vec3 outc=mix(night,col,dotm)+col*.1;
  gl_FragColor=vec4(outc,1.);
}`;

type Props = { glow?: 'bottom' | 'top' };

export default function HalftoneDawn({ glow = 'bottom' }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'p');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const uRes = gl.getUniformLocation(prog, 'res');
    const uTime = gl.getUniformLocation(prog, 'time');
    const uGrid = gl.getUniformLocation(prog, 'grid');
    gl.uniform1f(gl.getUniformLocation(prog, 'glowTop'), glow === 'top' ? 1 : 0);

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const size = () => {
      const w = Math.round(canvas.clientWidth * dpr);
      const h = Math.round(canvas.clientHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
      gl.uniform2f(uRes, w, h);
      gl.uniform1f(uGrid, 7 * dpr);
    };
    const draw = (ms: number) => {
      size();
      gl.uniform1f(uTime, ms / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    canvas.classList.add('on');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      draw(6000);
      const onResize = () => draw(6000);
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }

    let raf = 0;
    let visible = false;
    const loop = (ms: number) => {
      raf = 0;
      if (!visible || document.hidden) return;
      draw(ms);
      raf = requestAnimationFrame(loop);
    };
    const io = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      if (visible && !raf) raf = requestAnimationFrame(loop);
    });
    io.observe(canvas);
    const onVis = () => {
      if (!document.hidden && visible && !raf) raf = requestAnimationFrame(loop);
    };
    document.addEventListener('visibilitychange', onVis);

    return () => {
      io.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      if (raf) cancelAnimationFrame(raf);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [glow]);

  return <canvas className="halftone" ref={canvasRef} aria-hidden="true" />;
}
