import { World } from './Game/World'
import { Action, MoveAction } from './Game/Action'
import { say } from './Interface/Text'
import { addAction, clearActions } from './Interface/Action'

const main = () => {
  const world = new World('World')

  const room1 = world.createRoom({ name: 'room 1', height: 2 })
  const room2 = world.createRoom({ name: 'room 2', xPos: 1 })
  const room3 = world.createRoom({
    name: 'room 3',
    xPos: 1,
    yPos: 1,
    color: 'black',
  })

  const player = world.createPlayer('John Doe')

  const moveToRoom1 = new MoveAction(
    {
      text: 'Move to room 1',
      callback: () => {
        addAction(moveToRoom2)
      },
    },
    player,
    room1
  )

  const moveToRoom2 = new MoveAction(
    {
      text: 'Move to room 2',
      callback: () => {
        addAction(moveToRoom1)
        if (room3.color === 'black') addAction(searchTheRoom)
        else addAction(moveToRoom3)
      },
    },
    player,
    room2
  )

  const moveToRoom3 = new MoveAction(
    {
      text: 'Move to room 3',
      callback: () => {
        setTimeout(() => {
          say(`${player.name} found the exit 🎉`)
        }, 1200)
      },
    },
    player,
    room3
  )

  const searchTheRoom = new Action({
    text: 'Search the room with care',
    callback: () => {
      say(`${player.name} searches the room ...`)
      clearActions()
      setTimeout(() => {
        say(`${player.name} found a little trap door to another room`)
        addAction(moveToRoom1)
        addAction(moveToRoom3)
        room3.updateColor()
      }, 1200)
    },
  })

  setTimeout(() => {
    say(`${player.name} wakes up.`)
    addAction(moveToRoom2)
  }, 1200)
}

void main()
