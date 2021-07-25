import Dice from './Dice'

export interface Result {
  values: number[]
  score: number
}

export interface Rule {
  apply(dice: Dice): Result
}

export default class RuleSet {
  private rules: Rule[]

  constructor(rules: Rule[]) {
    this.rules = rules
  }

  score(dice: Dice): Result {
    const results: Result[] = []

    this.rules.forEach((rule) => {
      results.push(rule.apply(dice))
    })

    return this.highestScoringResult(results)
  }

  private highestScoringResult(results: Result[]): Result {
    let maxResult: Result = { values: [], score: 0 }

    for (let i = 0; i < results.length; i++) {
      const currentResult = results[i];
      if (currentResult.score > maxResult.score) {
        maxResult = currentResult
      }
    }

    return maxResult
  }
}
