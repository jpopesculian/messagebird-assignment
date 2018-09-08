import React, { Component } from 'react'
import styles from './styles.css'
import classnames from 'classnames'
import { Icon, x as xIcon } from 'react-icons'

export default class NewMessageForm extends Component {
  render() {
    const { children, onClose, active } = this.props
    return (
      <div className={classnames(styles.dimmer, { [styles.dimmerOn]: active })}>
        <div className={classnames(styles.modal, { [styles.modalOn]: active })}>
          <div className={styles.closeIcon} onClick={onClose}>
            <Icon icon={xIcon} size={24} />
          </div>
          {children}
        </div>
      </div>
    )
  }
}
