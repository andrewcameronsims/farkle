import Dice from '../Dice'
import Straight from './Straight'

describe("Straight", () => {
  const straight = new Straight()

  it("returns a straight result", () => {
    const dice = Dice.of(1, 2, 3, 4, 5, 6)
    const result = straight.apply(dice)
    expect(result).toEqual({ values: [1, 2, 3, 4, 5, 6], score: 1500 })
  })

  it("returns a null result when there is no straight", () => {
    const dice = Dice.of(1, 2, 3, 2, 1, 1)
    const result = straight.apply(dice)
    expect(result).toEqual({ values: [], score: 0 })
  })
})
