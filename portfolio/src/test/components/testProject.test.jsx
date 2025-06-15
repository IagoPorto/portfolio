import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { Project } from "../../components/Project";
const advanceTimers = 3000;
describe("Project", () => {
  const props = {
    name: "Test Project",
    description: "A sample description",
    url: "https://example.com",
    tecnologies: ["React", "Vitest", "CSS"],
    photos: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg"],
  };

  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders project name, description and stack", () => {
    render(<Project {...props} />);

    expect(
      screen.getByRole("heading", { name: /Test Project/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/A sample description/i)).toBeInTheDocument();
    expect(screen.getByText(/React, Vitest, CSS/)).toBeInTheDocument();
  });

  it("renders the first image initially", () => {
    render(<Project {...props} />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "/img/1.jpg");
    expect(image).toHaveAttribute("alt", "Test Project slide 1");
  });

  it("cycles images every 3 seconds", () => {
    render(<Project {...props} />);

    const getImg = () => screen.getByRole("img");

    expect(getImg()).toHaveAttribute("src", "/img/1.jpg");
    act(() => {
      vi.advanceTimersByTime(advanceTimers);
    });
    expect(getImg()).toHaveAttribute("src", "/img/2.jpg");
    act(() => {
      vi.advanceTimersByTime(advanceTimers);
    });
      expect(getImg()).toHaveAttribute("src", "/img/3.jpg");
    act(() => {
      vi.advanceTimersByTime(advanceTimers);
    });
      expect(getImg()).toHaveAttribute("src", "/img/1.jpg"); // looped back
  });

  it("renders no image if photos array is empty", () => {
    const { container } = render(<Project {...props} photos={[]} />);
    expect(container.querySelector("img")).toBeNull();
  });

  it("wraps image in a link to the provided URL", () => {
    render(<Project {...props} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
