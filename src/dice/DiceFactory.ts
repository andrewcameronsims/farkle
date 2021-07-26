import Dice from './Dice'

export default class DiceFactory {
  empty(): Dice {
    return new Dice()
  }

  roll(numDice: number): Dice {
    return new Dice(numDice)
  }

  of(...values: number[]): Dice {
    return new Dice(0, ...values);
  }
}
