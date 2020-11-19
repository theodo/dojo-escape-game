const canvasId = 'map'
const horizontalScaling = 50
const verticalScaling = 50

const mapCanvas = document.getElementById(canvasId)
const mapContext = mapCanvas.getContext('2d')
/**
 * @param {Room} room - The room to link to the current room
 */
const drawRoom = (room) => {
  mapContext.fillStyle = room.color
  mapContext.fillRect(
    room.xPos * horizontalScaling,
    room.yPos * verticalScaling,
    room.height * verticalScaling,
    room.width * horizontalScaling
  )
}

/**
 * Draw a given world.
 * @param {World} world - The world to draw.
 */
export const drawMap = (world) => world.rooms.forEach(drawRoom)
