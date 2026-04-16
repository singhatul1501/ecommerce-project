import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HeroSection from "./HeroSection";

describe("HeroSection", () => {
    test("renders primary hero heading and supporting copy", () => {
        render(<HeroSection />);

        expect(screen.getByText(/upskill with/i)).toBeInTheDocument();
        expect(screen.getByText(/industry-ready/i)).toBeInTheDocument();
        expect(screen.getByText(/online courses/i)).toBeInTheDocument();
        expect(
            screen.getByText(/job-oriented learning and certification/i)
        ).toBeInTheDocument();
        expect(
            screen.getByText(/master the skills top companies are hiring for today/i)
        ).toBeInTheDocument();
    });

    test("renders search input with expected placeholder and allows typing", async () => {
        render(<HeroSection />);

        const searchInput = screen.getByPlaceholderText(
            /search data science, web dev\.\.\./i
        );

        expect(searchInput).toBeInTheDocument();

        await userEvent.type(searchInput, "react");
        expect(searchInput).toHaveValue("react");
    });

    test("renders both call-to-action buttons", async () => {
        render(<HeroSection />);

        const browseButton = screen.getByRole("button", {
            name: /browse courses/i,
        });
        const callButton = screen.getByRole("button", {
            name: /book a free call/i,
        });

        expect(browseButton).toBeInTheDocument();
        expect(callButton).toBeInTheDocument();
        expect(screen.getAllByRole("button")).toHaveLength(2);

        await userEvent.click(browseButton);
        await userEvent.click(callButton);

        expect(browseButton).toBeEnabled();
        expect(callButton).toBeEnabled();
    });

    test("renders trust indicators and right-side image/stat card", () => {
        render(<HeroSection />);

        expect(screen.getByText(/certified courses/i)).toBeInTheDocument();
        expect(screen.getByText(/expert mentors/i)).toBeInTheDocument();

        expect(screen.getByRole("img", { name: /learning/i })).toBeInTheDocument();
        expect(screen.getByText(/course completion/i)).toBeInTheDocument();
        expect(screen.getByText(/98% success/i)).toBeInTheDocument();
    });
});
