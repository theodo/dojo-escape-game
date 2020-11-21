const canvasId = 'map'
const horizontalScaling = 150
const verticalScaling = 150

const mapCanvas = document.getElementById(canvasId)
const mapContext = mapCanvas.getContext('2d')
/**
 * @param {Room} room - The room to draw
 */
const drawRoom = (room) => {
  mapContext.fillStyle = room.color
  mapContext.fillRect(
    room.xPos * horizontalScaling,
    room.yPos * verticalScaling,
    room.width * horizontalScaling,
    room.height * verticalScaling
  )
}

/**
 * Draw a given world.
 * @param {World} world - The world to draw.
 */
export const drawMap = (world) => world.rooms.forEach(drawRoom)
