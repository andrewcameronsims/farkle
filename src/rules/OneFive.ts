import { Rule, Result } from '../RuleSet'
import Dice from '../dice/Dice'

export default class OneFive implements Rule {
  score = 50

  apply(dice: Dice): Result {
    if (dice.rolls[5] > 0) {
      return { values: [5], score: this.score }
    } else {
      return { values: [], score: 0 }
    }
  }
}
