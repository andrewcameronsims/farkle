import Round from './Round'

const mockRuleSet = {
  score: () => mockResult,
}

const mockResult = {
  values: [1],
  score: 1
}

describe("Round", () => {
  const round = new Round(mockRuleSet)

  it("initializes with six rolled and zero held dice", () => {
    expect(round.heldDice.size()).toEqual(0)
    expect(round.rolledDice.size()).toEqual(6)
  })
})
