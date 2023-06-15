import { classNameConcat } from "../src";
import { isMeaningless } from "../src/String";

test("className concat", () => {
  expect(classNameConcat(["flex", "min-h-screen", "flex-col", "items-center", "justify-between", "p-24"]))
    .toBe("flex min-h-screen flex-col items-center justify-between p-24");
});

test("className concat with inheritOrBase", () => {
  expect(classNameConcat(["flex", "min-h-screen", "flex-col", "items-center", "justify-between", "p-24", "base"]))
    .toBe("flex min-h-screen flex-col items-center justify-between p-24 base");
});

test("isMeaningless", () => {
  expect(isMeaningless("")).toStrictEqual({ result: true, data: "" });
});
