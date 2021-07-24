export default class Dice {
  rolls: Record<string, number>

  static empty(): Dice {
    return new Dice()
  }

  static roll(numDice: number): Dice {
    return new Dice(numDice)
  }

  static of(...values: number[]): Dice {
    return new Dice(0, ...values);
  }

  size(): number {
    return Object.values(this.rolls).reduce((a, b) => a + b, 0)
  }

  contains(...values: number[]): boolean {
    const { rolls: otherRolls } = Dice.of(...values)

    return Object.entries(otherRolls).every(([dieRoll, numRolls]) => this.rolls[dieRoll] >= numRolls)
  }

  add(value: number): void {
    this.rolls[value] = (this.rolls[value] || 0) + 1
  }

  remove(value: number): void {
    if (this.rolls[value] > 0) {
      this.rolls[value] -= 1
    } else {
      throw new Error("No die of this value exists to remove")
    }
  }

  private constructor(numDice = 0, ...values: number[]) {
    this.rolls = {}

    if (values.length > 0) {
      values.forEach(value => this.add(value))
    } else {
      for (let i = 0; i < numDice; i++) {
        this.rollDie();
      }
    }
  }

  private rollDie() {
    const roll = Math.ceil(Math.random() * 6)
    this.add(roll)
  }
}
