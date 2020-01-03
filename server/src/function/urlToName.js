/* eslint-disable no-useless-escape */
const nameToUrl = string => {
  return string.replace(/-/g, " ");
};
module.exports = nameToUrl;
