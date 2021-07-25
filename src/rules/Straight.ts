import { Rule, Result } from '../RuleSet'
import Dice from '../Dice'

export default class Straight implements Rule {
  apply(dice: Dice): Result {
    const hasStraight = JSON.stringify(dice.values()) === JSON.stringify([1, 2, 3, 4, 5, 6])
    if (hasStraight) {
      return { values: [1, 2, 3, 4, 5, 6], score: 1500 }
    } else {
      return { values: [], score: 0 }
    }
  }
}
