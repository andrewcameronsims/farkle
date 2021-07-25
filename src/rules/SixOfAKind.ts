import { Rule, Result } from '../RuleSet'
import Dice from '../Dice'

export default class SixOfAKind implements Rule {
  apply(dice: Dice): Result {
    if (dice.values().length === 6 && new Set(dice.values()).size === 1) {
      return { values: dice.values(), score: 3000 }
    } else {
      return { values: [], score: 0 }
    }
  }
}
