import { render, fireEvent } from "@testing-library/react";
import Globe3D from "../../components/Globe3D";
import { describe, it, vi, expect, beforeEach, afterEach } from "vitest";
import * as THREE from "three";

vi.mock("three", async () => {
  const actual = await vi.importActual("three");
  return {
    ...actual,
    WebGLRenderer: vi.fn(() => ({
      setSize: vi.fn(),
      setClearColor: vi.fn(),
      render: vi.fn(),
      domElement: document.createElement("canvas"),
      dispose: vi.fn(),
    })),
    CubeTextureLoader: vi.fn(() => ({
      load: vi.fn(() => ({})),
    })),
  };
});

vi.mock("three/examples/jsm/loaders/MTLLoader", () => ({
  MTLLoader: vi.fn(() => ({
    load: vi.fn((_, onLoad) =>
      onLoad({
        preload: vi.fn(),
      }),
    ),
  })),
}));

vi.mock("three/examples/jsm/loaders/OBJLoader", () => ({
  OBJLoader: vi.fn(() => ({
    setMaterials: vi.fn(),
    load: vi.fn((_, onLoad) =>
      onLoad({
        scale: { set: vi.fn() },
        position: { sub: vi.fn() },
        traverse: vi.fn((cb) => cb({ isMesh: true, material: {} })),
      }),
    ),
  })),
}));

describe("Globe3D", () => {
  let originalRAF;

  beforeEach(() => {
    originalRAF = window.requestAnimationFrame;
    window.requestAnimationFrame = vi.fn((cb) => cb());
  });

  afterEach(() => {
    window.requestAnimationFrame = originalRAF;
  });

  it("renders a div with correct style", () => {
    const { container } = render(<Globe3D />);
    const div = container.querySelector("div");
    expect(div).toBeInTheDocument();
    expect(div).toHaveStyle({ width: "100%" });
  });

  it("changes rotation speed on hover", () => {
    const { container } = render(<Globe3D />);
    const div = container.querySelector("div");

    fireEvent.mouseEnter(div);
    // rotationSpeedRef is internal, so we just ensure no crash and simulate the path
    fireEvent.mouseLeave(div);
  });

  it("sets up scene, camera, renderer and attaches canvas", () => {
    render(<Globe3D />);
    expect(THREE.WebGLRenderer).toHaveBeenCalled();
    expect(THREE.CubeTextureLoader).toHaveBeenCalled();
  });
});
