import { Storage } from "./interfaces";

declare global {
    interface Window { MocoDataStorage: Storage; }
}

class DataStorage implements Storage {
    constructor(private _storage: WeakMap<HTMLElement, Map<string, any>>) {}

    public get(el: HTMLElement, key: string): any {
        return this._storage.get(el).get(key);
    }

    public has(el: HTMLElement, key: string): boolean {
        return this._storage.has(el) && this._storage.get(el).has(key);
    }

    public put(el: HTMLElement, key: string, obj: any): void {
        if (!this._storage.has(el)) {
            this._storage.set(el, new Map());
        }
        this._storage.get(el).set(key, obj);
    }

    public remove(el: HTMLElement, key: string): boolean {
        if (this._storage.has(el)) {
            const ret = this._storage.get(el).delete(key);
            if (this._storage.get(el).size === 0) {
                this._storage.delete(el);
            }
            return ret;
        }
        return false;
    }
}

window.MocoDataStorage = new DataStorage(new WeakMap());
export const dataStore = window.MocoDataStorage;
