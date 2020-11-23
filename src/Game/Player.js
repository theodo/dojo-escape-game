import { Room } from './Room'
import { drawPlayer, erasePlayer } from '../Interface/Map'
import { say } from '../Interface/Text'

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
    erasePlayer(this)
    this.currentRoom = wantedRoom
    drawPlayer(this)
  }
}
