import Dice from './dice/Dice'

export interface Result {
  values: number[]
  score: number
}

export interface Rule {
  score: number

  apply(dice: Dice): Result
}

export default class RuleSet {
  private rules: Rule[]

  constructor(rules: Rule[]) {
    this.rules = rules
  }

  score(dice: Dice): Result {
    const heldDice = Dice.empty()
    const remainingDice = Dice.of(...dice.values())
    let score = 0

    this.rules.forEach(rule => {
      const { score: applyScore, values } = rule.apply(dice)
      if (applyScore > 0 && remainingDice.contains(...values)) {
        heldDice.add(...values)
        remainingDice.remove(...values)
        score += applyScore
      }
    })

    return { score, values: heldDice.values() }
  }
}
