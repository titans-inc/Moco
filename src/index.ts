import { MocoConfig } from './interfaces';
import { mocoConfigDefaults } from './config';

class Moco {
    constructor(private config: MocoConfig) {}
}

type RawConfiguration = {
    duration?: number, timing?: string, delay?: number,
    cssClass?: string
};
export function moco(el: string, config: RawConfiguration): void {
}
