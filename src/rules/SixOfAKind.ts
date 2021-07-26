import { Rule, Result } from '../RuleSet'
import Dice from '../dice/Dice'

export default class SixOfAKind implements Rule {
  score = 3000

  apply(dice: Dice): Result {
    const hasSixOfAKind = Object.values(dice.rolls).includes(6)
    if (hasSixOfAKind) {
      return { values: dice.values(), score: this.score }
    } else {
      return { values: [], score: 0 }
    }
  }
}
