import { Rule, Result } from '../RuleSet'
import Dice from '../Dice'

export default class OneOne implements Rule {
  apply(dice: Dice): Result {
    if (dice.rolls["1"] > 0) {
      return { values: [1], score: 100 }
    } else {
      return { values: [], score: 0 }
    }
  }
}
