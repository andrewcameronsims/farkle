import RuleSet from "./RuleSet";
import { standardRules } from './rules'
import Dice from "./dice/Dice";

describe("RuleSet", () => {
  const ruleSet = new RuleSet(standardRules)

  describe("score(dice: Dice): Result", () => {
    it("takes the best possible result from the dice", () => {
      const dice = Dice.of(4, 4, 4, 4, 5, 6)
      const result = ruleSet.score(dice)

      expect(result).toEqual(
        { values: [4, 4, 4, 4, 5], score: 1050}
      )
    })

    describe("when there are multiple potential scores", () => {
      const dice = Dice.of(5, 5, 5, 5, 5, 5)
      const result = ruleSet.score(dice)

      it("returns the higher score", () => {
        expect(result).toEqual(
          { values: [...dice.values()], score: 3000 }
        )
      })
    })
  })
})
