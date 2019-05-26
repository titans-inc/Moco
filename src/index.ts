import { MocoConfig, ColorTransition } from './interfaces';
import { RawConfiguration } from './types';
import { mocoConfigDefaults } from './config';

class Moco {
    constructor(private el: Element, private config: MocoConfig) {}
}

export function moco(selector: string, rawConfig: RawConfiguration): void {
    let _elementsList = document.querySelectorAll(selector);
    let _config = {...mocoConfigDefaults, ...rawConfig};
    let _mCfg: MocoConfig;

    if (_config.cssClass) {
        _mCfg = {transition: null, cssClass: _config.cssClass};
    } else {
        let _transition: ColorTransition = {
            duration: _config.duration, 
            timing: _config.timing,
            delay: _config.delay
        };
        _mCfg = {transition: _transition, cssClass: null};
    }

    for (const el of _elementsList) {
        new Moco(el, _mCfg);
    }
}
