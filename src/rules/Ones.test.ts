import Dice from '../dice/Dice'
import Ones from './Ones'

describe("Ones", () => {
  const ones = new Ones()

  it("returns a ones result", () => {
    const dice = Dice.of(1, 1, 3, 5, 5, 6)
    const result = ones.apply(dice)
    expect(result).toEqual({ values: [1, 1], score: 200 })
  })

  it("returns a null result when there is not a one", () => {
    const dice = Dice.of(3, 2, 3, 2, 3, 2)
    const result = ones.apply(dice)
    expect(result).toEqual({ values: [], score: 0 })
  })
})
