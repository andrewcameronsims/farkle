import { Rule, Result } from '../RuleSet'
import Dice from '../Dice'

export default class ThreePairs implements Rule {
  apply(dice: Dice): Result {
    const hasThreePairs = JSON.stringify(Object.values(dice.rolls)) === JSON.stringify([2, 2, 2])
    if (hasThreePairs) {
      return { values: dice.values(), score: 1500 }
    } else {
      return { values: [], score: 0 }
    }
  }
}
