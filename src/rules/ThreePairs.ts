import { Rule, Result } from '../RuleSet'
import Dice from '../dice/Dice'

export default class ThreePairs implements Rule {
  score = 1500

  apply(dice: Dice): Result {
    const hasThreePairs = JSON.stringify(Object.values(dice.rolls)) === JSON.stringify([2, 2, 2])
    if (hasThreePairs) {
      return { values: dice.values(), score: this.score }
    } else {
      return { values: [], score: 0 }
    }
  }
}
