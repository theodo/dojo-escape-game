import { Player } from './Player'
import { Room } from './Room'
import { randomId } from './utils'
import { clearActions, addEnabledActions } from '../Interface/Action'
import { say } from '../Interface/Text'
import { World } from './World'

export class Action {
  /**
   * Create an action
   * @param {Object} actionConfig the action config
   * @param {string} actionConfig.text the action text
   * @param {()=>void | undefined} actionConfig.isEnabled evaluated after each action for action availability, if undefined the action is not automatically enabled
   * @param {World} actionConfig.world evaluated after each action for action availability
   * @param {()=>Promise<void> | undefined} actionConfig.callback to do on action click
   */
  constructor({
    text,
    callback = () => Promise.resolve(undefined),
    isEnabled = () => false,
    world,
  }) {
    this.text = text
    this.callback = () => {
      clearActions()
      callback()
        .then(() => {
          addEnabledActions(world)
        })
        .catch(console.error)
    }
    this.isEnabled = isEnabled
    this.identifier = randomId()
    world.addAction(this)
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
        return actionConfig.callback
          ? actionConfig.callback()
          : Promise.resolve(undefined)
      },
    })
  }
}
