import Dice from '../dice/Dice'
import OneOne from './OneOne'

describe("OneOne", () => {
  const oneOne = new OneOne()

  it("returns a one five result", () => {
    const dice = Dice.of(1, 2, 3, 4, 5, 6)
    const result = oneOne.apply(dice)
    expect(result).toEqual({ values: [1], score: 100 })
  })

  it("returns a null result when there is not one five", () => {
    const dice = Dice.of(2, 2, 2, 2, 2, 2)
    const result = oneOne.apply(dice)
    expect(result).toEqual({ values: [], score: 0 })
  })
})
