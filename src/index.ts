type inheritBaseClassName = string;

function classNameConcat(classNameList: Array<string | inheritBaseClassName | undefined>): string {
  return classNameList.reduce((accumulator, currentValue) => {
    if (currentValue !== undefined) {
      const trimmedValue = currentValue.trim();

      if (trimmedValue !== '') {
        const normalizedValue = trimmedValue.replace(/\s+/g, ' ');
        return accumulator === '' ? normalizedValue : `${accumulator} ${normalizedValue}`;
      }
    }

    return accumulator;
  }, '');
}

export {
  classNameConcat
};
