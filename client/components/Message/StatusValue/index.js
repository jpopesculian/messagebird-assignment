import React, { Component, Fragment } from 'react'
import { Icon, clock, send, checkCircle, alertCircle } from 'react-icons'
import { capitalize, map, join, words } from 'lodash'
import styles from './styles.css'

export default class StatusValue extends Component {
  render() {
    const { status } = this.props
    let icon = {}
    let color = '#ccc'
    switch (status) {
      case 'scheduled':
        icon = clock
        color = 'blue'
        break
      case 'sent':
        icon = send
        color = 'blue'
        break
      case 'buffered':
        icon = clock
        color = 'blue'
        break
      case 'delivered':
        icon = checkCircle
        color = 'green'
        break
      case 'expired':
        icon = xCircle
        color = 'yellow'
        break
      case 'deliver_failed':
        icon = xCircle
        color = 'red'
        break
    }
    return (
      <Fragment>
        <span style={{ color }} className={styles.icon}>
          <Icon icon={icon} size={14} />
        </span>
        <span style={{ color }}>
          {join(' ', map(capitalize, words(status)))}
        </span>
      </Fragment>
    )
  }
}
