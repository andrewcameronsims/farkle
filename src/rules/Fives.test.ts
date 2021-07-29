import Dice from '../dice/Dice'
import Fives from './Fives'

describe("Fives", () => {
  const fives = new Fives()

  it("returns a fives result", () => {
    const dice = Dice.of(1, 2, 3, 5, 5, 6)
    const result = fives.apply(dice)
    expect(result).toEqual({ values: [5, 5], score: 100 })
  })

  it("returns a null result when there is not one five", () => {
    const dice = Dice.of(1, 2, 1, 2, 1, 2)
    const result = fives.apply(dice)
    expect(result).toEqual({ values: [], score: 0 })
  })
})
