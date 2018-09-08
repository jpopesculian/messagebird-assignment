import React, { Component } from 'react'
import { Icon, plusSquare } from 'react-icons'
import styles from './styles.css'
import newMessageStore from '~/stores/newMessage'

export default class NewMessageButton extends Component {
  render() {
    return (
      <button className={styles.button} onClick={() => newMessageStore.show()}>
        <span className={styles.icon}>
          <Icon icon={plusSquare} />
        </span>
        <span className={styles.title}>
          New Message
        </span>
      </button>
    )
  }
}
