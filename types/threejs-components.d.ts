declare module 'threejs-components/build/cursors/tubes1.min.js' {
  type TubesApp = {
    tubes: { setColors: (c: string[]) => void; setLightsColors: (c: string[]) => void };
    dispose: () => void;
  };
  const TubesCursor: (
    canvas: HTMLCanvasElement,
    options?: {
      bloom?: { threshold?: number; strength?: number; radius?: number } | false;
      tubes?: { colors?: string[]; lights?: { intensity?: number; colors?: string[] } };
      sleepRadiusX?: number;
      sleepRadiusY?: number;
      sleepTimeScale1?: number;
      sleepTimeScale2?: number;
    },
  ) => TubesApp;
  export default TubesCursor;
}
