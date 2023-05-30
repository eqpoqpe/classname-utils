import { isMeaningless } from "./String";

function classNameConcat(baseClassName: string, list: Array<string>): string {
  return baseClassName.concat(" ", list.reduce((a, c) => {
    const a_r = isMeaningless(a);
    const c_r = isMeaningless(c);

    if (!a_r.result && !c_r.result) {
      return a_r.data.concat(" ", c_r.data);
    }

    return a;
  })).trim();
}

export {
  classNameConcat
};