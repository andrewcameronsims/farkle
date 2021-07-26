import Dice from '../dice/Dice'
import OneFive from './OneFive'

describe("OneFive", () => {
  const oneFive = new OneFive()

  it("returns a one five result", () => {
    const dice = Dice.of(1, 2, 3, 4, 5, 6)
    const result = oneFive.apply(dice)
    expect(result).toEqual({ values: [5], score: 50 })
  })

  it("returns a null result when there is not one five", () => {
    const dice = Dice.of(1, 2, 1, 2, 1, 2)
    const result = oneFive.apply(dice)
    expect(result).toEqual({ values: [], score: 0 })
  })
})
