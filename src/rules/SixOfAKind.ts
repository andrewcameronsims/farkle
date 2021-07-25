import { Rule, Result } from '../RuleSet'
import Dice from '../Dice'

export default class SixOfAKind implements Rule {
  apply(dice: Dice): Result {
    const hasSixOfAKind = Object.values(dice.rolls).includes(6)
    if (hasSixOfAKind) {
      return { values: dice.values(), score: 3000 }
    } else {
      return { values: [], score: 0 }
    }
  }
}
