import React, { Component, Fragment } from 'react'
import { Icon, phoneIncoming, phoneOutgoing } from 'react-icons'
import { capitalize, map, join, words } from 'lodash'
import styles from './styles.css'

export default class DirectionValue extends Component {
  render() {
    const { direction } = this.props
    let icon = {}
    switch (direction) {
      case 'inbound':
        icon = phoneIncoming
        break
      case 'outbound':
        icon = phoneOutgoing
        break
    }
    return (
      <Fragment>
        <span className={styles.icon}>
          <Icon icon={icon} size={14} />
        </span>
        <span>
          {capitalize(direction)}
        </span>
      </Fragment>
    )
  }
}
