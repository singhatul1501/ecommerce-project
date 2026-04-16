import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

test("renders home page sections", () => {
    render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    );

    expect(screen.getByText(/popular courses/i)).toBeInTheDocument();
    expect(screen.getByText(/student success stories/i)).toBeInTheDocument();
});
