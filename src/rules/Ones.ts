import { Rule, Result } from '../RuleSet'
import Dice from '../dice/Dice'

export default class Ones implements Rule {
  score = 100

  apply(dice: Dice): Result {
    const values: number[] = []
    let score = 0

    dice.values().forEach((value) => {
      if (value === 1) {
        values.push(value)
        score += this.score
      }
    })

    return { values, score }
  }
}
