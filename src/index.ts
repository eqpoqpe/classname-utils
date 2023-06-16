import { isMeaningless } from "./String";

type inheritBaseClassName = string;

function classNameConcat(classNameList: Array<string | inheritBaseClassName>): string {
  const classNameString = classNameList.reduce((prevValue: string, currValue: string) => {
    const prevValueResult = isMeaningless(prevValue);
    const currValueResult = isMeaningless(currValue);

    // valid string of prevValueResult
    if (!prevValueResult.result) {
      if (!currValueResult.result)
        return prevValueResult.data.concat(" ", currValueResult.data);
      else
        return prevValueResult.data;
    }

    // invalid string of prevValueResult
    else {
      if (!currValueResult.result)
        return currValueResult.data;
      else
        return prevValueResult.data;
    }
  });

  return classNameString;
}

export {
  classNameConcat
};
