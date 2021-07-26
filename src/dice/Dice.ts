export default class Dice {
  rolls: Record<number, number>

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

  keys(): number[] {
    return Object
      .keys(this.rolls)
      .map(rollKey => parseInt(rollKey))
      .filter(rollKey => this.rolls[rollKey] > 0)
  }

  values(): number[] {
    const values: number[] = []

    Object.keys(this.rolls).forEach((rollValue) => {
      const value = parseInt(rollValue)
      for (let i = 0; i < this.rolls[value]; i++) {
        values.push(parseInt(rollValue))
      }
    })

    return values
  }

  contains(...values: number[]): boolean {
    const { rolls: otherRolls } = Dice.of(...values)

    return Object.entries(otherRolls).every(([dieRoll, numRolls]) => {
      const key = parseInt(dieRoll)
      return this.rolls[key] >= numRolls
    })
  }

  add(...values: number[]): void {
    values.forEach(value => {
      this.rolls[value] = (this.rolls[value] || 0) + 1
    })
  }

  remove(...values: number[]): void {
    values.forEach(value => {
      if (this.rolls[value] > 0) {
        this.rolls[value] -= 1
      } else {
        throw new Error("No die of this value exists to remove")
      }
    })
  }

  constructor(numDice = 0, ...values: number[]) {
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
