import { Rule, Result } from '../RuleSet'
import Dice from '../dice/Dice'

export default class Triplet implements Rule {
  score = 600

  apply(dice: Dice): Result {
    const triplet = Object.entries(dice.rolls).find(entry => entry[1] === 3)
    if (triplet) {
      const tripletValue = parseInt(triplet[0])
      const values = new Array(3).fill(tripletValue).map(value => parseInt(value))
      const score = tripletValue === 1 ? 300 : tripletValue * 100
      return { values, score }
    } else {
      return { values: [], score: 0 }
    }
  }
}
