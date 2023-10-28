import { classNameConcat } from "../src";

var className = "      base   flex-col";
var classNameFromProps;

test("className concat", () => {
  expect(
    classNameConcat([
      "flex",
      "min-h-screen",
      "flex-col",
      "items-center",
      "justify-between",
      "     base    p-24",
    ]),
  ).toBe("flex min-h-screen flex-col items-center justify-between base p-24");
});

test("className concat with inheritOrBase", () => {
  expect(
    classNameConcat([
      classNameFromProps,
      "flex",
      "min-h-screen",
      "flex-col",
      "items-center",
      "justify-between",
      "p-24",
      className,
    ]),
  ).toBe(
    "flex min-h-screen flex-col items-center justify-between p-24 base flex-col",
  );
});

test("className concat with inheritOrBase", () => {
  function darkClassName() {
    return "dark:text-pink-500";
  }

  expect(
    classNameConcat([
      className,
      "flex",
      "min-h-screen",
      "flex-col",
      darkClassName,
      "items-center",
      "justify-between",
      "p-24",
    ]),
  ).toBe(
    "base flex-col flex min-h-screen flex-col dark:text-pink-500 items-center justify-between p-24",
  );
});
