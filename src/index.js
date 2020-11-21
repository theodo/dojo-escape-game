import { World } from './Game/World'
import { drawMap } from './Interface/Map'

function main() {
  const world = new World('World')

  const room1 = world.createRoom({ name: 'room1', height: 2 })
  const room2 = world.createRoom({ name: 'room2', xPos: 1, height: 2 })

  const player = world.createPlayer()

  room1.addConnection(room2, () => {
    return 'Hola moved to room 2 from room 1'
  })

  room2.addConnection(room1, () => {
    return 'Hola moved to room 1 from room 2'
  })

  drawMap(world)
  console.log(player.move(room2))
  console.log(player.currentRoom)
}

void main()
