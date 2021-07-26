import { Rule, Result } from '../RuleSet'
import Dice from '../dice/Dice'

export default class FourWithPair implements Rule {
  score = 1500

  apply(dice: Dice): Result {
    const hasFourWithPair = JSON.stringify(Object.values(dice.rolls)) === JSON.stringify([4, 2])
    if (hasFourWithPair) {
      return { values: dice.values(), score: this.score }
    } else {
      return { values: [], score: 0 }
    }
  }
}
