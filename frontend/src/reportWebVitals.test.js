jest.mock("web-vitals", () => ({
    getCLS: jest.fn(),
    getFID: jest.fn(),
    getFCP: jest.fn(),
    getLCP: jest.fn(),
    getTTFB: jest.fn(),
}));

import reportWebVitals from "./reportWebVitals";

test("exports a function", () => {
    expect(typeof reportWebVitals).toBe("function");
});

test("does nothing when callback is not a function", () => {
    expect(() => reportWebVitals(null)).not.toThrow();
});
