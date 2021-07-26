import { standardRules } from './rules'
import RuleSet from './RuleSet'
import Round from './Round'

const standardRuleset = new RuleSet(standardRules)
const round = new Round(standardRuleset)

console.log(round)
process.exit(0)
