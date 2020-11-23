import { Player } from './Player'
import { Room } from './Room'
import { drawRoom, drawPlayer } from '../Interface/Map'
import { Action } from './Action'

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
   * @param {Object} roomConfiguration - this is the room configuration
   */
  createRoom(roomConfiguration) {
    const room = new Room(roomConfiguration)
    this.rooms.push(room)
    drawRoom(room)
    return room
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
