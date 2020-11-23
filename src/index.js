import { World } from './Game/World'
import { Action, MoveAction } from './Game/Action'
import { say } from './Interface/Text'
import { addAction } from './Interface/Action'

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

  new MoveAction(
    {
      text: 'Move to room 1',
      isEnabled: () => player.currentRoom === room2,
      world,
    },
    player,
    room1
  )

  new MoveAction(
    {
      text: 'Move to room 3',
      callback: () =>
        new Promise((resolve) => {
          setTimeout(() => {
            say(`${player.name} found the exit 🎉`)
          }, 1200)
          resolve()
        }),
      isEnabled: () => player.currentRoom === room2 && room3.color !== 'black',
      world,
    },
    player,
    room3
  )

  new Action({
    text: 'Search the room with care',
    callback: () =>
      new Promise((resolve) => {
        say(`${player.name} searches the room ...`)
        setTimeout(() => {
          say(`${player.name} found a little trap door to another room`)
          room3.updateColor()
          resolve()
        }, 3000)
      }),
    isEnabled: () => player.currentRoom === room2 && room3.color === 'black',
    world,
  })

  setTimeout(() => {
    say(`${player.name} wakes up.`)
    addAction(
      new MoveAction(
        {
          text: 'Move to room 2',
          isEnabled: () => player.currentRoom === room1,
          world,
        },
        player,
        room2
      )
    )
  }, 1200)
}

void main()
