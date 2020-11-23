/**
 * return a random string id
 * @return {string}
 */
export const randomId = () =>
  window.crypto.getRandomValues(new Uint32Array(1))[0].toString(16)
