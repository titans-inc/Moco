export interface ColorTransition {
    readonly duration: number;
    readonly timing?: string;
    readonly delay?: number;
}

export interface MocoConfig {
    readonly transition: ColorTransition;
    readonly cssClass?: string;
}

export interface RawConfiguration {
    duration?: number;
    timing?: string;
    delay?: number;
    cssClass?: string;
}

export interface Storage {
    get(el: HTMLElement, key: string): any;
    has(el: HTMLElement, key: string): boolean;
    put(el: HTMLElement, key: string, obj: any): void;
    remove(el: HTMLElement, key: string): boolean;
    removeAll(el: HTMLElement): boolean;
}
