import { dataStore } from "./bootstrap";
import { mocoConfigDefaults } from "./config";
import { ColorTransition, MocoConfig, RawConfiguration } from "./interfaces";
import { transitionToString } from "./utils";

class Moco {
    constructor(private el: HTMLElement, private config: MocoConfig) {
        const _transition = transitionToString(this.config.transition);
        this.el.style.transition = _transition;
        this.el.style.webkitTransition = _transition;
    }

    public get configuration() {
        return this.config;
    }

    public get element() {
        return this.el;
    }
}

class MocoManager {
    constructor(private el: string) {}

    public induce() {
        throw new Error("Method not implemented.");
    }

    public useStratergy() {
        throw new Error("Method not implemented.");
    }
}

export function moco(selector: string, rawConfig: RawConfiguration): MocoManager {
    const _elementsList: HTMLElement[] = Array.from(document.querySelectorAll(selector));
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

    return new MocoManager(selector);
}
