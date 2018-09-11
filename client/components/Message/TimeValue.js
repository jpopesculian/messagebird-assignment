import React, { Component } from 'react'
import { observer } from 'mobx-react'
import clockStore, { MINUTE, HOUR } from '~/stores/clock'

@observer
export default class TimeValue extends Component {
  render() {
    if (!this.props.time) {
      return null
    }
    const tick = clockStore.tick // render every tick

    const time = new Date(this.props.time)
    const now = new Date()
    const startOfDay = (() => {
      const date = new Date()
      date.setHours(0, 0, 0, 0)
      return date
    })()

    const duration = now - time

    if (duration < MINUTE) {
      return 'now'
    }
    if (duration < HOUR) {
      const minutes = Math.floor(duration / MINUTE)
      return `${minutes} minutes ago`
    }
    if (time > startOfDay) {
      return time.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric'
      })
    }
    return time.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    })
  }
}
