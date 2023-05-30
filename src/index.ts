import { isMeaningless } from "./String";

function classNameConcat(baseClassName: string, list: Array<string>): string {
  return baseClassName.concat(" ", list.reduce((a, c) => {
    const a_r = isMeaningless(a);
    const c_r = isMeaningless(c);

    if (a_r.result) {
      return c;
    }

    if (c_r.result) {
      return a;
    }

    return a.concat(" ", c_r.data);
  }, "")).trim();
}

export {
  classNameConcat
};