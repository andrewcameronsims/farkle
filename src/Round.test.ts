import Round from './Round'
import Dice from './dice/Dice'

const mockRuleSet = {
  score: () => mockResult,
}

const mockResult = {
  values: [1],
  score: 1
}

const testDiceFactory = {
  empty(): Dice {
    return new Dice()
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  roll(_: number): Dice {
    return Dice.of(1, 1, 3, 3, 3, 5)
  },

  of(...values: number[]): Dice {
    return new Dice(0, ...values);
  }
}

describe("Round", () => {
  const round = new Round(mockRuleSet, testDiceFactory)

  it("initializes with six rolled and zero held dice", () => {
    expect(round.heldDice.size()).toEqual(0)
    expect(round.rolledDice.size()).toEqual(6)
  })

  describe("hold(dice: Dice): boolean", () => {
    describe("when holding dice that weren't rolled", () => {
      const toHold = Dice.of(2, 2, 2)
      const result = round.hold(toHold)

      it("returns false", () => {
        expect(result).toEqual(false)
      })

      it("does not change the held dice", () => {
        expect(round.heldDice.values()).toEqual([])
        expect(round.rolledDice.values()).toEqual([1, 1, 3, 3, 3, 5])
      })
    })

    describe("when holding non-scoring dice", () => {
      const mockResult = { values: [], score: 0 }
      const mockRuleSet = {
        score: () => mockResult,
      }
      const round = new Round(mockRuleSet, testDiceFactory)
      const toHold = Dice.of(1, 3, 5)
      const result = round.hold(toHold)

      it("returns false", () => {
        expect(result).toEqual(false)
      })

      it("does not change the held dice", () => {
        expect(round.heldDice.values()).toEqual([])
        expect(round.rolledDice.values()).toEqual([1, 1, 3, 3, 3, 5])
      })
    })

    describe("when holding scoring dice", () => {
      const mockResult = { values: [3, 3, 3], score: 300 }
      const mockRuleSet = {
        score: () => mockResult,
      }
      const round = new Round(mockRuleSet, testDiceFactory)
      const toHold = Dice.of(3, 3, 3)
      const result = round.hold(toHold)

      it("returns true", () => {
        expect(result).toEqual(true)
      })

      it("moves the scoring dice from rolled to held", () => {
        expect(round.heldDice.values()).toEqual([3, 3, 3])
        expect(round.rolledDice.values()).toEqual([1, 1, 5])
      })

      it("increments the score by the correct amount", () => {
        expect(round.score).toEqual(300)
      })
    })

    describe("when holding enough scoring dice to exhaust the rolled dice", () => {
      const mockResult = { values: [1, 1, 3, 3, 3, 5], score: 550 }
      const mockRuleSet = {
        score: () => mockResult,
      }
      const round = new Round(mockRuleSet, testDiceFactory)
      const toHold = Dice.of(1, 1, 3, 3, 3, 5)
      const result = round.hold(toHold)

      it("returns true", () => {
        expect(result).toEqual(true)
      })

      it("holds the scoring dice", () => {
        expect(round.heldDice.values()).toEqual([1, 1, 3, 3, 3, 5])
      })

      it("increments the score by the correct amount", () => {
        expect(round.score).toEqual(550)
      })

      it("rolls a new set of dice", () => {
        expect(round.rolledDice.values()).toEqual([1, 1, 3, 3, 3, 5])
      })
    })
  })
})
