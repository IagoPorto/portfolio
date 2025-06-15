import { render, screen } from "@testing-library/react";
import { describe, it, vi, expect, beforeEach, afterEach } from "vitest";
import "@testing-library/jest-dom";

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

  it("renders the mouse follower div", () => {
    render(<MouseFollower />);
    expect(screen.getByTestId("mouse-follower")).toBeInTheDocument();
  });
});
