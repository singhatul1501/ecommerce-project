import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CTASection from "./CTASection";

describe("CTASection", () => {
    test("renders offer badge and icon", () => {
        render(<CTASection />);

        expect(screen.getByText(/limited time offer - 30% off/i)).toBeInTheDocument();
        expect(screen.getByTestId("BoltIcon")).toBeInTheDocument();
    });

    test("renders complete heading and supporting text", () => {
        render(<CTASection />);

        expect(
            screen.getByText(/ready to start your learning\s*journey\?/i)
        ).toBeInTheDocument();
        expect(
            screen.getByText(/join thousands of students building their dream careers/i)
        ).toBeInTheDocument();
    });

    test("renders a single primary CTA button", () => {
        render(<CTASection />);

        const ctaButton = screen.getByRole("button", { name: /sign up for free/i });
        expect(ctaButton).toBeInTheDocument();
        expect(ctaButton).toBeEnabled();
        expect(screen.getAllByRole("button")).toHaveLength(1);
    });

    test("allows clicking the CTA button", async () => {
        render(<CTASection />);

        const ctaButton = screen.getByRole("button", { name: /sign up for free/i });

        await userEvent.click(ctaButton);

        expect(ctaButton).toBeInTheDocument();
        expect(ctaButton).toBeEnabled();
    });
});
