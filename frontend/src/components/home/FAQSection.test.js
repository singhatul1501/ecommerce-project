import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FAQSection from "./FAQSection";

describe("FAQSection", () => {
    test("renders FAQ heading, subheading, and all questions", () => {
        render(<FAQSection />);

        expect(screen.getByText(/frequently asked questions/i)).toBeInTheDocument();
        expect(screen.getByText(/got questions\? we've got answers/i)).toBeInTheDocument();

        const questionButtons = screen.getAllByRole("button");
        expect(questionButtons).toHaveLength(6);
        expect(
            screen.getByRole("button", {
                name: /are the classes live or recorded\?/i,
            })
        ).toBeInTheDocument();
    });

    test("keeps all FAQ panels collapsed on initial render", () => {
        render(<FAQSection />);

        const questionButtons = screen.getAllByRole("button");
        questionButtons.forEach((button) => {
            expect(button).toHaveAttribute("aria-expanded", "false");
        });
    });

    test("expands selected panel and collapses others", async () => {
        render(<FAQSection />);

        const firstQuestion = screen.getByRole("button", {
            name: /are the classes live or recorded\?/i,
        });
        const secondQuestion = screen.getByRole("button", {
            name: /do you provide certificates\?/i,
        });

        await userEvent.click(firstQuestion);
        expect(firstQuestion).toHaveAttribute("aria-expanded", "true");
        expect(secondQuestion).toHaveAttribute("aria-expanded", "false");

        await userEvent.click(secondQuestion);
        expect(secondQuestion).toHaveAttribute("aria-expanded", "true");
        expect(firstQuestion).toHaveAttribute("aria-expanded", "false");
    });

    test("collapses an expanded panel when clicked again", async () => {
        render(<FAQSection />);

        const question = screen.getByRole("button", {
            name: /is there placement assistance\?/i,
        });

        await userEvent.click(question);
        expect(question).toHaveAttribute("aria-expanded", "true");

        await userEvent.click(question);
        expect(question).toHaveAttribute("aria-expanded", "false");
    });
});
