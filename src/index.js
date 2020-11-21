import { World } from './Game/World'

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

  setTimeout(() => {
    setInterval(() => {
      player.move(player.currentRoom === room1 ? room2 : room1)
    }, 1500)
  }, 500)
}

void main()
