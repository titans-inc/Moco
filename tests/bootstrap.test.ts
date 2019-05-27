import {dataStore} from "../src/bootstrap";

const _el = document.createElement("article");

test("store and access", () => {
    dataStore.put(_el, "id", 34);
    dataStore.put(_el, "isTrueElement", false);
    dataStore.put(_el, "approximateMean", 1.0 + 3.9);
    dataStore.put(_el, "desc", "I'm an mockup element");

    expect(dataStore.get(_el, "id")).toBe(34);
    expect(dataStore.get(_el, "isTrueElement")).toBe(false);
    expect(dataStore.get(_el, "approximateMean")).toBeCloseTo(4.9);
    expect(dataStore.get(_el, "desc")).toBe("I'm an mockup element");
});

test("has property", () => {
    expect(dataStore.has(_el, "id")).toBe(true);
    expect(dataStore.has(_el, "isTrueElement")).toBe(true);
    expect(dataStore.has(_el, "approximateMean")).toBe(true);
    expect(dataStore.has(_el, "desc")).toBe(true);
    expect(dataStore.has(_el, "color")).toBe(false);
});

test("remove property", () => {
    expect(dataStore.remove(_el, "id")).toBe(true);
    expect(dataStore.remove(_el, "isTrueElement")).toBe(true);
    expect(dataStore.remove(_el, "approximateMean")).toBe(true);
    expect(dataStore.remove(_el, "desc")).toBe(true);
    expect(dataStore.remove(_el, "color")).toBe(false);
});
