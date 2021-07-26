import Dice from '../dice/Dice'
import ThreePairs from './ThreePairs'

describe("ThreePairs", () => {
  const threePairs = new ThreePairs()

  it("returns a three pairs result", () => {
    const dice = Dice.of(1, 1, 2, 2, 3, 3)
    const result = threePairs.apply(dice)
    expect(result).toEqual({ values: [1, 1, 2, 2, 3, 3], score: 1500 })
  })

  it("returns a null result when there is not three pairs", () => {
    const dice = Dice.of(1, 2, 3, 2, 1, 1)
    const result = threePairs.apply(dice)
    expect(result).toEqual({ values: [], score: 0 })
  })
})
