import { dataStore } from "./bootstrap";
import { mocoConfigDefaults } from "./config";
import { ColorTransition, MocoConfig, RawConfiguration } from "./interfaces";
import { transitionToString } from "./utils";

class Moco {
    private _timer: NodeJS.Timeout;

    constructor(private el: HTMLElement, private config: MocoConfig) {
        const _transition = transitionToString(this.config.transition);
        this.el.style.transition = _transition;
        this.el.style.webkitTransition = _transition;
        this.start();
    }

    public start(): void {
        this._psychoInduce(5000);
    }

    public stop(): void {
        clearInterval(this._timer);
    }

    /* TODO */
    private _psychoInduce(interval: number) {
        let i = 0;
        const colors = ["red", "yellow", "purple", "green"];
        this.el.style.backgroundColor = colors[i];

        this._timer = setInterval(() => {
            i = (i + 1) % colors.length;
            this.el.style.backgroundColor = colors[i];
        }, interval);
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

    public destroy(): void {
        const _elementsList: HTMLElement[] = Array.from(document.querySelectorAll(this.el));
        for (const el of _elementsList) {
            dataStore.removeAll(el);
        }
    }
}

export function moco(selector: string, rawConfig?: RawConfiguration): MocoManager {
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
