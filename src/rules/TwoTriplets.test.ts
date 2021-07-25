import Dice from '../Dice'
import TwoTriplets from './TwoTriplets'

describe("TwoTriplets", () => {
  const twoTriplets = new TwoTriplets()

  it("returns a two triplets result", () => {
    const dice = Dice.of(1, 1, 1, 2, 2, 2)
    const result = twoTriplets.apply(dice)
    expect(result).toEqual({ values: [1, 1, 1, 2, 2, 2], score: 2500 })
  })

  it("returns a null result when there is not two triplets", () => {
    const dice = Dice.of(1, 2, 3, 2, 1, 1)
    const result = twoTriplets.apply(dice)
    expect(result).toEqual({ values: [], score: 0 })
  })
})
