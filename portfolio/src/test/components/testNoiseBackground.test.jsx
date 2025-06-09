import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import NoiseBackground from "../../components/NoiseBackground";

describe("NoiseBackground", () => {
  it("renders the noise background div", () => {
    const { container } = render(<NoiseBackground />);
    const div = container.querySelector(".bg");

    expect(div).toBeInTheDocument();
  });
});
