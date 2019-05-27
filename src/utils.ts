import { ColorTransition } from "./interfaces";

export function transitionToString(transition: ColorTransition): string {
    let _tranStr = `background-color`;

    if (transition.duration > 0) {
        _tranStr = _tranStr.concat(` ${transition.duration}s`);
    } else {
        throw new RangeError("ColorTransition.duration should be a valid positive number");
    }

    if (transition.timing) {
        _tranStr = _tranStr.concat(` ${transition.timing}`);
    }

    if (transition.delay && transition.delay > 0) {
        _tranStr = _tranStr.concat(` ${transition.delay}s`);
    } else if (transition.delay) {
        throw new RangeError("ColorTransition.delay should be a valid positive number");
    }

    return _tranStr;
}
