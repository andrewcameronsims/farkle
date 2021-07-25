import Dice from './Dice'
import { Result } from './RuleSet'

interface Scorable {
  score(dice: Dice): Result
}

export default class Round {
  heldDice: Dice
  rolledDice: Dice
  ruleset: Scorable
  score: number

  hold(dice: Dice): boolean {
    const allValuesPresent = this.rolledDice.contains(...dice.values())
    const { score: highestScore } = this.ruleset.score(dice)

    if (allValuesPresent && highestScore > 0) {
      dice.values().forEach(value => {
        this.heldDice.add(value)
        this.rolledDice.remove(value)
      })
      this.score += highestScore
      return true
    } else {
      return false
    }
  }

  constructor(ruleset: Scorable) {
    this.heldDice = Dice.empty()
    this.rolledDice = Dice.roll(6)
    this.ruleset = ruleset
    this.score = 0
  }
}
