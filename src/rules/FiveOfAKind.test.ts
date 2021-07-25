import Dice from '../Dice'
import FiveOfAKind from './FiveOfAKind'

describe("FiveOfAKind", () => {
  const fiveOfAKind = new FiveOfAKind()

  it("returns a five of a kind result", () => {
    const dice = Dice.of(1, 1, 1, 1, 1, 2)
    const result = fiveOfAKind.apply(dice)
    expect(result).toEqual({ values: [1, 1, 1, 1, 1], score: 2000 })
  })

  it("returns a null result when there is no five of a kind", () => {
    const dice = Dice.of(1, 2, 3, 2, 1, 1)
    const result = fiveOfAKind.apply(dice)
    expect(result).toEqual({ values: [], score: 0 })
  })
})
