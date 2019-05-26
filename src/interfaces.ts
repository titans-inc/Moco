export interface ColorTransition {
    readonly duration: number;
    readonly timing?: string;
    readonly delay?: number;
}

export interface MocoConfig {
    readonly transition: ColorTransition;
    readonly cssClass?: string;
}
