import { trimAndCheckEmpty } from "./utils";

type InheritBaseClassName = string;
type InitializerFunction = () => string;

function processValue(
  value: string | InheritBaseClassName | InitializerFunction | undefined,
): string {
  if (typeof value === "function") {
    const result = value();
    if (typeof result === "string") {
      return trimAndCheckEmpty(result);
    }
  } else {
    return trimAndCheckEmpty(value);
  }
  return "";
}

function classNameConcat(
  classNameList: Array<
    string | InheritBaseClassName | InitializerFunction | undefined
  >,
): string {
  return classNameList
    .map(processValue)
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ");
}

export { classNameConcat };
