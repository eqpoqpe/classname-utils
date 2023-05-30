import { classNameConcat } from "../src";
import { isMeaningless } from "../src/String";

test("className concat", () => {
  expect(classNameConcat("base", ["tell", "  s c  ", ""])).toBe("base tell sc");
});

test("isMeaningless", () => {
  expect(isMeaningless("")).toStrictEqual({ result: true, data: "" });
});