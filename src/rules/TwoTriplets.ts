import Dice from '../dice/Dice'
import { Rule, Result } from '../RuleSet'

export default class TwoTriplets implements Rule {
  score = 2500

  apply(dice: Dice): Result {

    const hasTwoTriplets = JSON.stringify(Object.values(dice.rolls)) === JSON.stringify([3, 3])
    if (hasTwoTriplets) {
      return { values: dice.values(), score: this.score }
    } else {
      return { values: [], score: 0 }
    }
  }
}
