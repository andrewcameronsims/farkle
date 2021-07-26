import Dice from '../dice/Dice'
import SixOfAKind from './SixOfAKind'

describe("SixOfAKind", () => {
  const sixOfAKind = new SixOfAKind()

  it("returns a six of a kind result", () => {
    const dice = Dice.of(1, 1, 1, 1, 1, 1)
    const result = sixOfAKind.apply(dice)
    expect(result).toEqual({ values: [1, 1, 1, 1, 1, 1], score: 3000 })
  })

  it("returns a null result when there is no six of a kind", () => {
    const dice = Dice.of(1, 2, 3, 2, 1, 1)
    const result = sixOfAKind.apply(dice)
    expect(result).toEqual({ values: [], score: 0 })
  })
})
