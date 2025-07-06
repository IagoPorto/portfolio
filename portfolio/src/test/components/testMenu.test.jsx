import { render, screen, fireEvent } from "@testing-library/react";
import { Menu } from "../../components/Menu";
import { describe, it, vi, expect, beforeEach, afterEach } from "vitest";

const MENU_ITEMS = ["about", "experience", "projects"];

describe("Menu", () => {
  let scrollIntoViewMock;

  beforeEach(() => {
    scrollIntoViewMock = vi.fn();
    MENU_ITEMS.forEach((id) => {
      const section = document.createElement("section");
      section.id = id;
      section.scrollIntoView = scrollIntoViewMock;
      section.getBoundingClientRect = vi.fn(() => ({
        top: 100,
        bottom: 300,
      }));
      document.body.appendChild(section);
    });
  });

  afterEach(() => {
    MENU_ITEMS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.remove();
    });
    vi.restoreAllMocks();
  });

  it("renders all menu items", () => {
    render(<Menu />);
    MENU_ITEMS.forEach((item) => {
      expect(screen.getByText(item.toUpperCase())).toBeInTheDocument();
    });
  });

  it("calls scrollIntoView when clicking a menu item", () => {
    render(<Menu />);
    const link = screen.getByText("ABOUT");
    fireEvent.click(link);
    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "start",
    });
  });
});
