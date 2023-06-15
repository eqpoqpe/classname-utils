import { isMeaningless } from "./String";

type inheritBaseClassName = string;

/**
 * # classNameConcat
 *
 * ```tsx
 * function Page(props: PageProps): JSX.Element {
 *  const { className } = props;
 * 
 *  return (
 *    <div className={classNameConcat([className, "flex-col"])}></div>
 *  );
 * }
 * ```
 */
function classNameConcat(list: Array<string | inheritBaseClassName>): string {
  const classNameString = list.reduce((a, c) => {
    const a_r = isMeaningless(a);
    const c_r = isMeaningless(c);

    if (a_r.result) return c;
    if (c_r.result) return a;

    return a.concat(" ", c_r.data);
  }, "").trim();

  return classNameString;
}

export {
  classNameConcat
};
