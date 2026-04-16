import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PopularCourses from "./PopularCourses";

test("renders popular courses section", () => {
    render(
        <MemoryRouter>
            <PopularCourses />
        </MemoryRouter>
    );

    expect(screen.getByText(/popular courses/i)).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /view course/i }).length).toBeGreaterThan(0);
});
