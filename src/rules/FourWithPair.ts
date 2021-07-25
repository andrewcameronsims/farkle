import { Rule, Result } from '../RuleSet'
import Dice from '../Dice'

export default class FourWithPair implements Rule {
  apply(dice: Dice): Result {
    const hasFourWithPair = JSON.stringify(Object.values(dice.rolls)) === JSON.stringify([4, 2])
    if (hasFourWithPair) {
      return { values: dice.values(), score: 1500 }
    } else {
      return { values: [], score: 0 }
    }
  }
}
