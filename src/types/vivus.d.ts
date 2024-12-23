declare module "vivus" {
  type VivusTimingFunction =
    | "ease"
    | "ease-in"
    | "ease-out"
    | "ease-in-out"
    | "linear";

  type VivusType =
    | "delayed"
    | "sync"
    | "oneByOne"
    | "script"
    | "async"
    | "nsfw";

  interface VivusOptions {
    type?: VivusType;
    duration?: number;
    start?: "manual" | "autostart" | "inViewport";
    delay?: number;
    animTimingFunction?: VivusTimingFunction;
    pathTimingFunction?: VivusTimingFunction;
    dashGap?: number;
    forceRender?: boolean;
    selfDestroy?: boolean;
    file?: string;
    onReady?: (vivus: Vivus) => void;
  }

  export default class Vivus {
    constructor(
      element: string | HTMLElement,
      options?: VivusOptions,
      callback?: (vivus: Vivus) => void
    );

    play(speed?: number): Vivus;
    stop(): Vivus;
    reset(): Vivus;
    finish(): Vivus;
    setFrameProgress(progress: number): Vivus;
    getStatus(): "start" | "progress" | "end";
    destroy(): Vivus;
  }
}
