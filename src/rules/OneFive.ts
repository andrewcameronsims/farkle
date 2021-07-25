import { Rule, Result } from '../RuleSet'
import Dice from '../Dice'

export default class OneFive implements Rule {
  apply(dice: Dice): Result {
    if (dice.rolls["5"] > 0) {
      return { values: [5], score: 50 }
    } else {
      return { values: [], score: 0 }
    }
  }
}
