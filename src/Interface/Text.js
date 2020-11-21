const textId = 'text'
const textElement = document.getElementById(textId)

/**
 * Text to say
 * @param {string} textContent
 */
export const say = (textContent) => {
  textElement.innerHTML = textContent
}
