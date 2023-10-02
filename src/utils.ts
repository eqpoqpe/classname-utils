function trimAndCheckEmpty(value: string | undefined): string {
  if (typeof value === "string") {
    const trimmedValue = value.trim();
    return trimmedValue !== "" ? trimmedValue : "";
  }

  return "";
}

export { trimAndCheckEmpty };