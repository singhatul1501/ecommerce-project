import { render, screen } from "@testing-library/react";
import Courses, { courseList } from "./Courses";

test("exports course list", () => {
    expect(Array.isArray(courseList)).toBe(true);
    expect(courseList.length).toBeGreaterThan(0);
});

test("renders courses page", () => {
    render(<Courses />);

    expect(screen.getByText(/industry mastery/i)).toBeInTheDocument();
    expect(screen.getByText(/apply filters/i)).toBeInTheDocument();
});
