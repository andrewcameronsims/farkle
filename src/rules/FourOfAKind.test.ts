import Dice from '../dice/Dice'
import FourOfAKind from './FourOfAKind'

describe("FourOfAKind", () => {
  const fourOfAKind = new FourOfAKind()

  it("returns a four of a kind result", () => {
    const dice = Dice.of(1, 1, 1, 1, 2, 2)
    const result = fourOfAKind.apply(dice)
    expect(result).toEqual({ values: [1, 1, 1, 1], score: 1000 })
  })

  it("returns a null result when there is no four of a kind", () => {
    const dice = Dice.of(1, 2, 3, 4, 5, 1)
    const result = fourOfAKind.apply(dice)
    expect(result).toEqual({ values: [], score: 0 })
  })
})
