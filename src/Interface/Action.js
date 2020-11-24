const actionId = 'actions'
const actionsElement = document.getElementById(actionId)
import { Action } from '../Game/Action'
import { World } from '../Game/World'

/**
 * Add an action to the interface
 * @param {Action} action action to register
 */
export const addAction = ({ text, callback, identifier }) => {
  const actionElement = document.createElement('button')
  Object.assign(actionElement, {
    classList: ['action-button'],
    onclick: callback,
    id: identifier,
    innerHTML: text,
  })
  actionsElement.append(actionElement)
}

/**
 * Add all enabled action for current state
 * @param {World} world
 */
export const addEnabledActions = (world) =>
  world.actions.forEach((action) => action.isEnabled() && addAction(action))

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
