import Dice from '../Dice'
import { Rule, Result } from '../RuleSet'

export default class TwoTriplets implements Rule {
  apply(dice: Dice): Result {

    const hasTwoTriplets = JSON.stringify(Object.values(dice.rolls)) === JSON.stringify([3, 3])
    if (hasTwoTriplets) {
      return { values: dice.values(), score: 2500 }
    } else {
      return { values: [], score: 0 }
    }
  }
}
