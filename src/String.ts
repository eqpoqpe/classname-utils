type MeaninglessResult = { result: boolean; data: string; };

function fixWhiteSpace(text: string) {
  const regex = /\s+/g;

  return text.replace(regex, " ").trim();
}

/**
 * including empty string
 */
function isMeaningless(s: string): MeaninglessResult {
  const r = s.replace(/\s/g, "");

  return r === "" ?
    ({ result: true, data: r }) :
    ({ result: false, data: fixWhiteSpace(s) });
}

export {
  isMeaningless
}