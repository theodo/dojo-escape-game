import { World } from './Game/World'
import { Action } from './Game/Action'
import { say } from './Interface/Text'
import { addAction, clearActions } from './Interface/Action'

const main = () => {
  const world = new World('World')

  const room1 = world.createRoom({ name: 'room1', height: 2 })
  const room2 = world.createRoom({ name: 'room2', xPos: 1 })
  const room3 = world.createRoom({
    name: 'room3',
    xPos: 1,
    yPos: 1,
    color: 'black',
  })
  const player = world.createPlayer('John Doe')

  room1.addConnection(room2, () => {
    return `${player.name} moved to room 2 from room 1`
  })

  room2.addConnection(room1, () => {
    return `${player.name} moved to room 1 from room 2`
  })

  room2.addConnection(room3, () => {
    return `${player.name} moved to room 3 from room 2`
  })

  const moveToRoom1 = new Action('Move to room 1', () => {
    player.move(room1)
    clearActions()
    addAction(moveToRoom2)
  })

  const moveToRoom2 = new Action('Move to room 2', () => {
    player.move(room2)
    clearActions()
    addAction(moveToRoom1)
    if (room3.color === 'black') addAction(searchTheRoom)
    else addAction(moveToRoom3)
  })

  const moveToRoom3 = new Action('Move to room 3', () => {
    player.move(room3)
    clearActions()
    setTimeout(() => {
      say(`${player.name} found the exit 🎉`)
    }, 1200)
  })

  const searchTheRoom = new Action('Search the room with care', () => {
    say(`${player.name} searches the room ...`)
    clearActions()
    setTimeout(() => {
      say(`${player.name} found a little trap door to another room`)
      addAction(moveToRoom1)
      addAction(moveToRoom3)
      room3.updateColor()
    }, 1200)
  })

  setTimeout(() => {
    say(`${player.name} wakes up.`)
    addAction(moveToRoom2)
  }, 1200)
}

void main()
