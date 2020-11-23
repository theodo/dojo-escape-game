import { randomId } from './utils'

export class Action {
  /**
   * Create an action
   * @param {string} actionText the action text
   * @param {()=>void} actionCallback to do on action click
   */
  constructor(actionText, actionCallback) {
    this.actionText = actionText
    this.actionCallback = actionCallback
    this.identifier = randomId()
  }
}
