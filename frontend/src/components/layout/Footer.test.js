import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("renders footer branding", () => {
    render(<Footer />);

    expect(screen.getAllByText(/smartlearnx/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument();
});
