import { render, screen } from "@testing-library/react";
import LearningPaths from "./LearningPaths";

test("renders learning paths section", () => {
    render(<LearningPaths />);

    expect(screen.getByText(/complete learning paths/i)).toBeInTheDocument();
    expect(screen.getByText(/full stack developer program/i)).toBeInTheDocument();
});
