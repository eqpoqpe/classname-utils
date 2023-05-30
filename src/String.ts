type MeaninglessResult = {
  result: boolean;
  data: string;
};

/**
 * including empty string
 */
function isMeaningless(s: string): MeaninglessResult {
  const r = s.replace(/\s*/g, "");

  return r === "" ?
    ({ result: true, data: r }) :
    ({ result: false, data: r });
}

export {
  isMeaningless
}