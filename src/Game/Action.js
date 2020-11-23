import { Player } from './Player'
import { Room } from './Room'
import { randomId } from './utils'
import { clearActions } from '../Interface/Action'
import { say } from '../Interface/Text'

export class Action {
  /**
   * Create an action
   * @param {Object} actionConfig the action config
   * @param {string} actionConfig.text the action text
   * @param {()=>void} actionConfig.callback to do on action click
   */
  constructor({ text, callback }) {
    this.text = text
    this.callback = () => {
      clearActions()
      callback()
    }
    this.identifier = randomId()
  }
}

export class MoveAction extends Action {
  /**
   * Create a move action to change room
   * @param {Object} actionConfig the action config
   * @param {Player} player the player to move
   * @param {Room} wantedRoom the room to move to
   */
  constructor(actionConfig, player, wantedRoom) {
    super({
      ...actionConfig,
      callback: () => {
        player.move(wantedRoom)
        say(`${player.name} moves to ${wantedRoom.name}`)
        actionConfig.callback()
      },
    })
  }
}
