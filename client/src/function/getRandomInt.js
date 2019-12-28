/**
 * @description generate random integer number
 * @param {Number} max maximum number to generate
 * @returns random number
 */
export const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
export default getRandomInt;
