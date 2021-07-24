import Dice from './Dice'

describe("Dice", () => {
  describe("empty()", () => {
    const dice = Dice.empty()

    it("initializes an empty set of dice", () => {
      expect(dice.rolls).toEqual({})
    })
  })

  describe("roll(numDice: number)", () => {
    const dice = Dice.roll(6)

    it("initializes a set of `numDice` dice", () => {
      const diceRolled = Object.values(dice.rolls).reduce((a, b) => a + b, 0)
      expect(diceRolled).toEqual(6)
    })
  })

  describe("of(...values: number[])", () => {
    const dice = Dice.of(1, 2, 3)

    it("initializes dice with the given values", () => {
      const values = Object.values(dice.rolls)
      const rolls = Object.keys(dice.rolls)

      expect(values).toEqual([1, 1, 1])
      expect(rolls).toEqual(["1", "2", "3"])
    })
  })

  describe("contains(...values: number[]): boolean", () => {
    const dice = Dice.of(1, 2, 3)

    it("returns true when the dice contains the values", () => {
      expect(dice.contains(1, 2)).toEqual(true)
    })

    it("returns true when the dice contains the values", () => {
      expect(dice.contains(1, 2, 6)).toEqual(false)
    })
  })

  describe("add(value: number)", () => {
    const dice = Dice.of(1, 2, 3)

    it("adds a value to the dice", () => {
      dice.add(2)
      expect(dice.rolls).toEqual({ 1: 1, 2: 2, 3: 1 })
    })
  })

  describe("remove(value: number)", () => {
    const dice = Dice.of(1, 2, 3)

    it("removes a value from the dice", () => {
      dice.remove(1)
      expect(dice.rolls).toEqual({ 1: 0, 2: 1, 3: 1 })
    })

    it("throws an exception if no dice of that value are present", () => {
      expect(() => { dice.remove(5) }).toThrow()
    })
  })
})
