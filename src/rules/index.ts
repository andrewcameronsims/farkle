import { Rule } from '../RuleSet'

import OneOne from "./OneOne"
import OneFive from "./OneFive"
import Triplet from "./Triplet"
import TwoTriplets from "./TwoTriplets"
import ThreePairs from "./ThreePairs"
import FourOfAKind from "./FourOfAKind"
import FiveOfAKind from "./FiveOfAKind"
import SixOfAKind from "./SixOfAKind"
import Straight from "./Straight"

export const standardRules: Rule[] = [
  new OneOne(), new OneFive(), new Triplet(),
  new TwoTriplets(), new ThreePairs(), new FourOfAKind(),
  new FiveOfAKind(), new SixOfAKind(), new Straight()
]
