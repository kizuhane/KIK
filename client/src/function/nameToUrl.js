/* eslint-disable no-useless-escape */
export const nameToUrl = string => {
  return string
    .trim()
    .replace(/[^a-zA-Z0-9\-\ ĄąĆćĘęŁłŃńÓóŚśŹźŻż]/g, " ")
    .replace(/\s+/g, "-");
};
export default nameToUrl;
