import { Rule, Result } from '../RuleSet'
import Dice from '../dice/Dice'

export default class OneOne implements Rule {
  score = 100

  apply(dice: Dice): Result {
    if (dice.rolls[1] > 0) {
      return { values: [1], score: this.score }
    } else {
      return { values: [], score: 0 }
    }
  }
}
