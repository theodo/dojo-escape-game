import { Player } from './Player'
import { Room } from './Room'

export class World {
  /**
   * @type {Room[]}
   */
  rooms = []

  /**
   * @type {Player | undefined}
   */
  player = undefined

  constructor(name) {
    this.name = name
  }

  createRoom(roomName) {
    const room = new Room(roomName)
    this.rooms.push(room)
    return room
  }

  /**
   * Add a connection between room1 and room2
   * @returns {Player} the created player
   */
  createPlayer() {
    if (this.rooms.length === 0) {
      throw new Error(
        'The world needs to have at least one room for the player to start'
      )
    }
    const player = new Player(this.rooms[0])
    this.player = player

    return player
  }
}
