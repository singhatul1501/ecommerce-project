import React from "react";

test("boots app using createRoot", () => {
    const mockRender = jest.fn();
    const mockCreateRoot = jest.fn(() => ({ render: mockRender }));

    jest.doMock("react-dom/client", () => ({
        __esModule: true,
        default: { createRoot: mockCreateRoot },
        createRoot: mockCreateRoot,
    }));

    jest.doMock("./App", () => () => <div>Mock App</div>);

    document.body.innerHTML = '<div id="root"></div>';

    jest.isolateModules(() => {
        require("./index");
    });

    expect(mockCreateRoot).toHaveBeenCalledTimes(1);
    expect(mockRender).toHaveBeenCalledTimes(1);
});
