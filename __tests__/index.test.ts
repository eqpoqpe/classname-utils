import { classNameConcat } from "../src";
import { isMeaningless } from "../src/String";

var className = "base flex-col";

test("className concat", () => {
  expect(classNameConcat(["flex", "min-h-screen", "flex-col", "items-center", "justify-between", "p-24"]))
    .toBe("flex min-h-screen flex-col items-center justify-between p-24");
});

test("className concat with inheritOrBase", () => {
  expect(classNameConcat(["flex", "min-h-screen", "flex-col", "items-center", "justify-between", "p-24"], "base flex-col"))
    .toBe("flex min-h-screen flex-col items-center justify-between p-24 base flex-col");
});

test("className concat with inheritOrBase", () => {
  expect(classNameConcat([className, "flex", "min-h-screen", "flex-col", "items-center", "justify-between", "p-24"]))
    .toBe("base flex-col flex min-h-screen flex-col items-center justify-between p-24");
});

test("isMeaningless", () => {
  expect(isMeaningless("")).toStrictEqual({ result: true, data: "" });
});
