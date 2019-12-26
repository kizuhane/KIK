import normalize from "normalize-strings";

export const stringToPath = string => {
  return normalize(string)
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 -]/g, " ")
    .replace(/\s+/g, "-");
};
export default stringToPath;
