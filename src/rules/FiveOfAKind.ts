import { Rule, Result } from '../RuleSet'
import Dice from '../Dice'

export default class FiveOfAKind implements Rule {
  apply(dice: Dice): Result {
    const hasFiveOfAKind = Object.values(dice.rolls).includes(5)
    if (hasFiveOfAKind) {
      const dieValue = Object.entries(dice.rolls).filter(entry => entry[1] === 5)[0][0]
      const values = new Array(5).fill(dieValue).map(value => parseInt(value))
      return { values, score: 2000 }
    } else {
      return { values: [], score: 0 }
    }
  }
}
