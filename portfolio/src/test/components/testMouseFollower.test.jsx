import { render, screen } from "@testing-library/react";
import { describe, it, vi, expect, beforeEach, afterEach } from "vitest";
import { MouseFollower } from "../../components/MouseFollower";

describe("MouseFollower", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("renders the follower div", () => {
    render(<MouseFollower />);
    const follower = screen.getByRole("presentation", { hidden: true });
    expect(follower).toBeInTheDocument();
  });

  it("updates position on pointermove", () => {
    render(<MouseFollower />);
    const follower = screen.getByRole("presentation", { hidden: true });

    const mockEvent = new PointerEvent("pointermove", {
      bubbles: true,
      pageX: 150,
      pageY: 200,
    });

    window.dispatchEvent(mockEvent);

    expect(follower).toHaveStyle({
      transform: "translate(150px, 200px)",
    });
  });
});
