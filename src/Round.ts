import DiceFactory from './dice/DiceFactory'
import Dice from './dice/Dice'
import { Result } from './RuleSet'

interface Scorable {
  score(dice: Dice): Result
}

export default class Round {
  diceFactory: DiceFactory
  heldDice: Dice
  rolledDice: Dice
  ruleset: Scorable
  score: number

  constructor(ruleset: Scorable, diceFactory: DiceFactory) {
    this.diceFactory = diceFactory
    this.heldDice = diceFactory.empty()
    this.rolledDice = diceFactory.roll(6)
    this.ruleset = ruleset
    this.score = 0
  }

  hold(dice: Dice): boolean {
    const allValuesPresent = this.rolledDice.contains(...dice.values())
    const { values, score: highestScore } = this.ruleset.score(dice)

    if (allValuesPresent && highestScore > 0) {
      values.forEach(value => {
        this.heldDice.add(value)
        this.rolledDice.remove(value)
      })
      this.score += highestScore
      if (this.rolledDice.size() === 0) this.rollAgain()

      return true
    } else {
      return false
    }
  }

  hasScoringDice(): boolean {
    const { score } = this.ruleset.score(this.rolledDice)
    if (score > 0) return true;

    return false
  }

  private rollAgain(): void {
    this.rolledDice = this.diceFactory.roll(6)
  }
}
