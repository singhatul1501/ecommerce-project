import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import CourseDetails from "./CourseDetails";

test("renders selected course details", () => {
    render(
        <MemoryRouter initialEntries={["/courses/python"]}>
            <Routes>
                <Route path="/courses/:id" element={<CourseDetails />} />
            </Routes>
        </MemoryRouter>
    );

    expect(screen.getByText(/advanced python for data engineering/i)).toBeInTheDocument();
});

test("renders fallback when course is missing", () => {
    render(
        <MemoryRouter initialEntries={["/courses/unknown"]}>
            <Routes>
                <Route path="/courses/:id" element={<CourseDetails />} />
            </Routes>
        </MemoryRouter>
    );

    expect(screen.getByText(/course not found/i)).toBeInTheDocument();
});
