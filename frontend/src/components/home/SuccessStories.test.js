import { render, screen } from "@testing-library/react";
import SuccessStories from "./SuccessStories";

test("renders success stories section", () => {
    render(<SuccessStories />);

    expect(screen.getByText(/student success stories/i)).toBeInTheDocument();
    expect(screen.getByText(/hear from our learners/i)).toBeInTheDocument();
});
