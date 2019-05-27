import { dataStore } from "../src/bootstrap";
import { moco } from "../src/index";
import { MocoConfig } from "../src/interfaces";

document.body.innerHTML = `<!DOCTYPE html>
<html>
    <body>
        <div id='test1'>test01</a>
        <div class='tests'>test02</a>
        <a class='tests' href='test2'>test03</a>
    </body>
</html>`;

test("selector id, empty config", () => {
    moco("#test1", {});
    const _config = dataStore.get(document.getElementById("test1"), "data").configuration as MocoConfig;
    expect(_config.cssClass).toBe(null);
    expect(_config.transition.delay).toBe(0);
    expect(_config.transition.duration).toBe(0.6);
    expect(_config.transition.timing).toBe("ease-in-out");
});

test("selector class, cssClass config", () => {
    moco(".tests", {cssClass: "moco"});
    for (const el of Array.from(document.getElementsByClassName("tests"))) {
        const _config = dataStore.get(el, "data").configuration as MocoConfig;
        expect(_config.cssClass).toBe("moco");
        expect(_config.transition).toBe(null);
    }
});

test("selector CSS3, same config", () => {
    const _config = dataStore.get(document.querySelector(`a[href="test2"]`), "data").configuration as MocoConfig;
    expect(_config.cssClass).toBe("moco");
    expect(_config.transition).toBe(null);
});

test("selector CSS3, modify config", () => {
    moco(`a[href="test2"]`, {delay: 2, duration: 1, timing: "linear"});
    const _config = dataStore.get(document.querySelector(`a[href="test2"]`), "data").configuration as MocoConfig;
    expect(_config.cssClass).toBe(null);
    expect(_config.transition.delay).toBe(2);
    expect(_config.transition.duration).toBe(1);
    expect(_config.transition.timing).toBe("linear");
});
