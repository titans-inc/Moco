import { ColorTransition } from './interfaces';

export function transitionToString(transition: ColorTransition): string {
    let tranStr = `background-color`;

    if(transition.duration > 0) {
        tranStr = tranStr.concat(` ${transition.duration}s`);
    } else {
        throw new RangeError('ColorTransition.duration should be a valid positive number');
    }

    if(transition.timing) {
        tranStr = tranStr.concat(` ${transition.timing}`);
    }

    if(transition.delay && transition.delay > 0) {
        tranStr = tranStr.concat(` ${transition.delay}s`);
    } else if(transition.delay) {
        throw new RangeError('ColorTransition.delay should be a valid positive number');
    }

    return tranStr;
}
