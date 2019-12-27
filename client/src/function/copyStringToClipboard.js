export const copyStringToClipboard = string => {
  navigator.clipboard.writeText(string).then("", err => {
    console.error("Could not copy text Permission Access needed: ", err);
  });
};

export default copyStringToClipboard;
