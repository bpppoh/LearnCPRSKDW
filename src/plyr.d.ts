declare module 'plyr' {
  export interface PlyrOptions {
    controls?: string[];
    settings?: string[];
    youtube?: {
      noCookie?: boolean;
      rel?: number;
      showinfo?: number;
      iv_load_policy?: number;
      modestbranding?: number;
    };
    [key: string]: any;
  }

  export default class Plyr {
    constructor(target: HTMLElement | string, options?: PlyrOptions);
    currentTime: number;
    duration: number;
    playing: boolean;
    play(): Promise<void>;
    pause(): void;
    restart(): void;
    destroy(): void;
    on(event: string, callback: (event: any) => void): void;
  }
}
