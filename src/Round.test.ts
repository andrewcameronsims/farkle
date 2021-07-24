import Round from './Round'

describe("Round", () => {
  const round = new Round()

  it("initializes with six rolled and zero held dice", () => {
    expect(round.heldDice.size()).toEqual(0)
    expect(round.rolledDice.size()).toEqual(6)
  })
})
