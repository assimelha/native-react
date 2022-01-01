import { render, screen, cleanup } from "@testing-library/react";
import * as React from "react";

import { Native } from "../";

const defaultChild = <div>hello world</div>;

afterEach(() => {
  cleanup();
  //@ts-ignore
  window.__native_notifications_injected__ = false;
  document.querySelector("script")?.remove();
});

const renderNative = (propsOverwrite = {}) => {
  const props = {
    children: defaultChild,
    token: "boob",
    userId: "user123",
    ...propsOverwrite,
  };

  return render(<Native {...props} />);
};

it(`injects the native script tag`, () => {
  renderNative({ token: "boob" });
  expect(document.querySelector("head")).toMatchInlineSnapshot(`
    <head>
      <script
        defer=""
        src="https://usenative.com/embed/native.js"
      />
    </head>
  `);
});

it(`injects the native script tag with custom domain`, () => {
  renderNative({
    token: "boob",
    domain: "http://localhost:4000",
  });

  expect(document.querySelector("head")).toMatchInlineSnapshot(`
    <head>
      <script
        defer=""
        src="http://localhost:4000/embed/native.js"
      />
    </head>
  `);
});

it(`handles a single element as a child`, () => {
  renderNative({ children: <div>hello world</div> });

  const div = screen.getByText("hello world");
  expect(div);
});

it(`handles a function as a child`, () => {
  renderNative({
    children: (props: any) => <div {...props}>hello world</div>,
  });

  const div = screen.getByText("hello world");
  expect(div);
});
