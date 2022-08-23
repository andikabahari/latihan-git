interface Human {
  name: string
  isAlive: boolean
}

const showHumanInfo = (human: Human): void => {
  console.log(`Name: ${human.name}`)
  console.log(`Alive: ${human.isAlive ? 'yes' : 'no'}`)
}

const human: Human = {
  name: 'Andika Bahari',
  isAlive: true,
}

showHumanInfo(human)
