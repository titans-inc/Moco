import { mocoConfigDefaults } from "./config";
import { ColorTransition, MocoConfig } from "./interfaces";
import { RawConfiguration } from "./types";

class Moco {
    constructor(private el: Element, private config: MocoConfig) {}
}

export function moco(selector: string, rawConfig: RawConfiguration): void {
    const _elementsList = document.querySelectorAll(selector);
    const _config = {...mocoConfigDefaults, ...rawConfig};
    let _mCfg: MocoConfig;

    if (_config.cssClass) {
        _mCfg = {transition: null, cssClass: _config.cssClass};
    } else {
        const _transition: ColorTransition = {
            delay: _config.delay,
            duration: _config.duration,
            timing: _config.timing,
        };
        _mCfg = {transition: _transition, cssClass: null};
    }

    for (const el of _elementsList) {
        new Moco(el, _mCfg);
    }
}
