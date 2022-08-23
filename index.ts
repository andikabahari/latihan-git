interface Human {
  name: string
  isAlive: boolean
  age: number
  canSwim: boolean
  canSing: boolean
}

const showHumanInfo = (human: Human): void => {
  console.log(`Name: ${human.name}`)
  console.log(`Alive: ${human.isAlive ? 'yes' : 'no'}`)
  console.log(`Age: ${human.age}`)
  console.log(`This human ${human.canSwim ? 'can' : "can't"} swim`)
  console.log(`This human ${human.canSing ? 'can' : "can't"} sing`)
}

const human: Human = {
  name: 'Andika Bahari',
  isAlive: true,
  age: 21,
  canSwim: false,
  canSing: false,
}

showHumanInfo(human)
