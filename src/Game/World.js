import { Player } from './Player'
import { Room } from './Room'
import { drawRoom, drawPlayer } from '../Interface/Map'
import { Action, MoveAction } from './Action'
import { clearActions, addEnabledActions } from '../Interface/Action'

export class World {
  /**
   * @type {Room[]}
   */
  rooms = []

  /**
   * @type {Action[]}
   */
  actions = []

  /**
   * @type {Player | undefined}
   */
  player = undefined

  constructor(name) {
    this.name = name
  }

  /**
   * @private
   * @param {()=>Promise<void> | undefined} callback to do on action click
   */
  wrapCallback(callback) {
    return () => {
      clearActions()
      return (callback ? callback() : Promise.resolve(null))
        .then(() => {
          addEnabledActions(this)
        })
        .catch(console.error)
    }
  }

  /**
   * @param {Object} roomConfiguration - this is the room configuration
   */
  createRoom(roomConfiguration) {
    const room = new Room(roomConfiguration)
    this.rooms.push(room)
    drawRoom(room)
    return room
  }

  /**
   * Create an action
   * @param {Object} actionConfig the action config
   * @param {string} actionConfig.text the action text
   * @param {()=>void | undefined} actionConfig.isEnabled evaluated after each action for action availability, if undefined the action is not automatically enabled
   * @param {()=>Promise<void> | undefined} actionConfig.callback to do on action click
   */
  createAction(actionConfig) {
    const action = new Action({
      ...actionConfig,
      world: this,
      callback: this.wrapCallback(actionConfig.callback),
    })
    this.addAction(action)
    return action
  }

  /**
   * Create a move action
   * @param {Object} actionConfig the action config
   * @param {string} actionConfig.text the action text
   * @param {()=>void | undefined} actionConfig.isEnabled evaluated after each action for action availability, if undefined the action is not automatically enabled
   * @param {()=>Promise<void> | undefined} actionConfig.callback to do on action click
   * @param {Room} wantedRoom the room to move to
   */
  createMoveAction(actionConfig, wantedRoom) {
    const action = new MoveAction(
      {
        ...actionConfig,
        world: this,
        callback: this.wrapCallback(actionConfig.callback),
      },
      this.player,
      wantedRoom
    )
    this.addAction(action)
    return action
  }

  /**
   * Add a connection between room1 and room2
   * @param {Action} action the action
   */
  addAction(action) {
    this.actions.push(action)
  }

  /**
   * Create a new player
   * @param {string} name the player name
   * @returns {Player} the created player
   */
  createPlayer(name) {
    if (this.rooms.length === 0) {
      throw new Error(
        'The world needs to have at least one room for the player to start'
      )
    }
    const player = new Player(this.rooms[0], name)
    this.player = player
    drawPlayer(player)
    return player
  }
}
