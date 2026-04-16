import { render, screen } from "@testing-library/react";
import MentorsSection from "./MentorsSection";

test("renders mentors section", () => {
    render(<MentorsSection />);

    expect(screen.getByText(/learn from industry experts/i)).toBeInTheDocument();
    expect(screen.getByText(/rahul sharma/i)).toBeInTheDocument();
});
