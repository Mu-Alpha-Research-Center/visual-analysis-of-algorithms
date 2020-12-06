export default class Time {
  hours: number
  minutes: number
  seconds: number

  constructor(hours: number, minutes: number, seconds: number) {
    this.hours = hours
    this.minutes = minutes
    this.seconds = seconds
  }

  subtract(otherTime: Time): Time {
    return Time.fromSeconds(this.toSeconds() - otherTime.toSeconds())
  }

  toSeconds(): number {
    return (this.hours * 60 * 60) + (this.minutes * 60) + this.seconds
  }

  static fromSeconds(seconds: number): Time {
    let time = new Time(0, 0, 0)
    for (let i of [2, 1, 0]) {
      let n: number = Math.floor(seconds / 60 ** i)
      switch(i) {
        case 2: time.hours = n; break
        case 1: time.minutes = n; break
        case 0: time.seconds = n; break
      }
      seconds -= n * 60 ** i
    }
    return time
  }

  toString(): string {
    return [this.hours, this.pad(this.minutes), this.pad(this.seconds)].join(':')
  }

  pad(n: number): string {
    return ('00' + n).slice(-2)
  }

  static fromString(timeString: string): Time {
    let [hours, minutes, seconds] = timeString.split(':').map(x => +x)
    return new Time(hours, minutes, seconds)
  }
}
