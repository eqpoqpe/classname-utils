import { isMeaningless } from "./String";

function classNameConcat(list: Array<string>, inheritOrBase: string = ""): string {
  const classNameString = list.reduce((a, c) => {
    const a_r = isMeaningless(a);
    const c_r = isMeaningless(c);

    if (a_r.result) return c;
    if (c_r.result) return a;

    return a.concat(" ", c_r.data);
  }, "").trim();

  if (inheritOrBase !== "")
    return classNameString.concat(...[" ", inheritOrBase]);

  return classNameString;
}

export {
  classNameConcat
};