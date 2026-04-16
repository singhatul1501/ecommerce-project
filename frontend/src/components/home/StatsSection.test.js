import { render, screen } from "@testing-library/react";
import StatsSection from "./StatsSection";

test("renders stats section", () => {
    render(<StatsSection />);

    expect(screen.getByText(/active learners/i)).toBeInTheDocument();
    expect(screen.getByText(/placement success/i)).toBeInTheDocument();
});
