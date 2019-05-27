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
    get(el: Element, key: string): any;
    has(el: Element, key: string): boolean;
    put(el: Element, key: string, obj: any): void;
    remove(el: Element, key: string): boolean;
}
