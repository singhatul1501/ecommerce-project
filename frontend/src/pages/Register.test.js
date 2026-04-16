import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Register from "./Register";

jest.mock("../services/api", () => ({
    post: jest.fn(),
}));

test("renders register form", () => {
    render(
        <MemoryRouter>
            <Register />
        </MemoryRouter>
    );

    expect(screen.getByText(/create account/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /sign up/i })).toBeInTheDocument();
});
