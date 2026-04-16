const mockUse = jest.fn();
const mockAxiosInstance = {
    interceptors: {
        request: {
            use: mockUse,
        },
    },
};

jest.mock("axios", () => ({
    create: jest.fn(() => mockAxiosInstance),
}));

describe("api service", () => {
    test("creates axios instance and registers request interceptor", async () => {
        const axios = (await import("axios")).default;
        const { default: api } = await import("./api");

        expect(axios.create).toHaveBeenCalledWith({
            baseURL: "http://localhost:5001",
        });
        expect(mockUse).toHaveBeenCalledTimes(1);
        expect(api).toBe(mockAxiosInstance);
    });
});
