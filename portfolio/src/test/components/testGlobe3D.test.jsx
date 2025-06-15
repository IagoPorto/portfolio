// src/test/components/testGlobe3D.test.jsx
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
      updateWorldMatrix: vi.fn(),
    })),
    CubeTextureLoader: vi.fn(() => ({
      load: vi.fn(() => ({})),
    })),
  };
});

vi.mock("three/examples/jsm/loaders/OBJLoader", async () => {
  const { Object3D } = await vi.importActual("three");
  return {
    OBJLoader: vi.fn(() => ({
      setMaterials: vi.fn(),
      load: vi.fn((_, onLoad) => {
        const obj = new Object3D();
        // si quieres espiar scale.set:
        vi.spyOn(obj.scale, "set");
        onLoad(obj);
      }),
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

describe("Globe3D", () => {
  let originalRAF;
  beforeEach(() => {
    originalRAF = window.requestAnimationFrame;
    window.requestAnimationFrame = vi.fn();
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
    fireEvent.mouseLeave(div);
  });

  it("sets up scene, camera, renderer and attaches canvas", () => {
    render(<Globe3D />);
    expect(THREE.WebGLRenderer).toHaveBeenCalled();
    expect(THREE.CubeTextureLoader).toHaveBeenCalled();
  });
});
