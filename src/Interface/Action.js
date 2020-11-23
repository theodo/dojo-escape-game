const actionId = 'actions'
const actionsElement = document.getElementById(actionId)
import { Action } from '../Game/Action'

/**
 * Add an action to the interface
 * @param {Action} action action to register
 */
export const addAction = ({ actionText, actionCallback, identifier }) => {
  const actionElement = document.createElement('button')
  Object.assign(actionElement, {
    classList: ['action-button'],
    onclick: actionCallback,
    id: identifier,
    innerHTML: actionText,
  })
  actionsElement.append(actionElement)
}

/**
 * Remove an action from the interface
 * @param {Action} action action to register
 */
export const removeAction = ({ identifier }) => {
  const actionElement = document.getElementById(identifier)
  if (actionElement) actionElement.parentNode.removeChild(actionElement)
}

/**
 * Clear all actions from the interface
 */
export const clearActions = () => {
  actionsElement.innerHTML = ''
}
