import { Room } from './Room'
import { drawPlayer, erasePlayer } from '../Interface/Map'

/**
 *
 */
export class Player {
  /**
   * Create a player
   * @param {Room} room the initial room where the player is
   * @param {string} name the player name
   */
  constructor(room, name) {
    this.currentRoom = room
    this.name = name
  }

  /**
   * Move to another room
   * @param {Room} wantedRoom
   */
  move(wantedRoom) {
    const roomConnection = this.currentRoom.roomConnections.find(
      (connection) => connection.room === wantedRoom
    )
    if (roomConnection === undefined) {
      throw 'The room you want is not in the good range'
    }

    try {
      const message = roomConnection.validator()
      erasePlayer(this)
      this.currentRoom = roomConnection.room
      drawPlayer(this)
      return message
    } catch (error) {
      return error
    }
  }
}
