import { question } from 'readline-sync'

import { standardRules } from './rules'
import RuleSet from './RuleSet'
import Round from './Round'
import Dice from './dice/Dice'
import DiceFactory from './dice/DiceFactory'

const standardRuleset = new RuleSet(standardRules)
const round = new Round(standardRuleset, new DiceFactory())

while (round.hasScoringDice()) {
  console.log("\nHeld dice:")
  console.log(round.heldDice.values())
  console.log("\nRolled dice:")
  console.log(round.rolledDice.values())

  const toHold = question("\nDice to hold? ")
    .split(" ")
    .map(num => parseInt(num))

  round.hold(Dice.of(...toHold))
}

console.log(`Total score: ${round.score}`)

process.exit(0)
