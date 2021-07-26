import { Rule, Result } from '../RuleSet'
import Dice from '../dice/Dice'

export default class FourOfAKind implements Rule {
  score = 1000

  apply(dice: Dice): Result {
    const hasFourOfAKind = Object.values(dice.rolls).includes(4)
    if (hasFourOfAKind) {
      const dieValue = Object.entries(dice.rolls).filter(entry => entry[1] === 4)[0][0]
      const values = new Array(4).fill(dieValue).map(value => parseInt(value))
      return { values, score: this.score }
    } else {
      return { values: [], score: 0 }
    }
  }
}
