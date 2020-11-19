const randomValue = () => Math.floor(Math.random() * 255)
const randomColor = () =>
  `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`

export class Room {
  /**
   * @type {{room: Room, validator: () => string}[]}
   */
  roomConnections = []

  /**
   * @param {Object} roomConfiguration - this is the room configuration
   * @param {string} roomConfiguration.name - the name of the room
   * @param {number} roomConfiguration.height - room height
   * @param {number} roomConfiguration.width - room width
   * @param {number} roomConfiguration.xPos - room horizontal emplacement
   * @param {number} roomConfiguration.yPos - room vertical emplacement
   */
  constructor({ name, height = 1, width = 1, xPos = 0, yPos = 0 }) {
    this.name = name
    this.height = height
    this.width = width
    this.xPos = xPos
    this.yPos = yPos
    this.color = randomColor()
  }

  /**
   * @param {Room} room - The room to link to the current room
   * @param {() => string} validator - the validation function to authorize usage of the connection
   */
  addConnection(room, validator) {
    this.roomConnections.push({
      room,
      validator,
    })
  }
}
