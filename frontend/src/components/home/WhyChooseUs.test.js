import { render, screen } from "@testing-library/react";
import WhyChooseUs from "./WhyChooseUs";

test("renders why choose us section", () => {
    render(<WhyChooseUs />);

    expect(screen.getByText(/why choose smartlearnx/i)).toBeInTheDocument();
    expect(screen.getByText(/live classes/i)).toBeInTheDocument();
});
