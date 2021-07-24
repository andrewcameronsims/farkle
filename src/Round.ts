import Dice from './Dice'

export default class Round {
  heldDice: Dice
  rolledDice: Dice
  score: number

  hold(...values: number[]): boolean {
    const allValuesPresent = this.rolledDice.contains(...values)

    if (allValuesPresent) {
      values.forEach(value => {
        this.heldDice.add(value)
        this.rolledDice.remove(value)
      })
      return true
    } else {
      return false
    }
  }

  constructor() {
    this.heldDice = Dice.empty()
    this.rolledDice = Dice.roll(6)
    this.score = 0
  }
}
