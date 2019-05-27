import { dataStore } from "./bootstrap";
import { mocoConfigDefaults } from "./config";
import { ColorTransition, MocoConfig, RawConfiguration } from "./interfaces";

class Moco {
    constructor(private el: Element, private config: MocoConfig) {}
    public get configuration() {
        return this.config;
    }
}

export function moco(selector: string, rawConfig: RawConfiguration): void {
    const _elementsList = Array.from(document.querySelectorAll(selector));
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
        dataStore.put(el, "data", new Moco(el, _mCfg));
    }
}
