import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Experience } from "../../components/Experience";

describe("Experience", () => {
  const props = {
    companyName: "OpenAI",
    companyUrl: "https://openai.com",
    position: "AI Engineer",
    initDate: "Jan 2022",
    finalDate: "Jun 2025",
    details: [
      "Developed advanced AI models",
      "Improved system performance",
      "Led cross-functional teams",
    ],
  };

  it("renders position and company name with link", () => {
    render(<Experience {...props} />);

    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toHaveTextContent(`${props.position} at`);

    const link = screen.getByRole("link", { name: props.companyName });
    expect(link).toHaveAttribute("href", props.companyUrl);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders init and final dates", () => {
    render(<Experience {...props} />);

    const dateText = screen.getByText(`${props.initDate} – ${props.finalDate}`);
    expect(dateText).toBeInTheDocument();
  });

  it("renders all detail list items", () => {
    render(<Experience {...props} />);

    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(props.details.length);
    props.details.forEach((detail, index) => {
      expect(items[index]).toHaveTextContent(detail);
    });
  });
});
