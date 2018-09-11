import { action, observable } from 'mobx'

export const SECOND = 1000
export const MINUTE = 60 * SECOND
export const HOUR = 60 * MINUTE

export class ClockStore {
  @observable interval = null
  @observable tick = 0

  constructor() {
    this.start()
  }

  @action start = () => {
    this.stop()
    this.interval = window.setInterval(() => this.increment(), MINUTE)
  }

  @action increment = () => (this.tick = (this.tick || 0) + 1)

  @action stop = () => {
    if (this.interval) {
      window.clearInterval(this.interval)
      this.interval = null
    }
  }
}

export default new ClockStore()
