import Dice from '../Dice'
import Triplet from './Triplet'

describe("Triplet", () => {
  const triplet = new Triplet()

  it("returns a three pairs result", () => {
    const dice = Dice.of(1, 1, 2, 2, 2, 3)
    const result = triplet.apply(dice)
    expect(result).toEqual({ values: [2, 2, 2], score: 200 })
  })

  it("returns a three pairs result with score 300 when pair is 1", () => {
    const dice = Dice.of(1, 1, 1, 2, 2, 3)
    const result = triplet.apply(dice)
    expect(result).toEqual({ values: [1, 1, 1], score: 300 })
  })

  it("returns a null result when there is not three pairs", () => {
    const dice = Dice.of(1, 2, 3, 2, 1, 5)
    const result = triplet.apply(dice)
    expect(result).toEqual({ values: [], score: 0 })
  })
})
