import React, { Component } from 'react'
import styles from './styles.css'
import typeStyles from '~/styles/typography.css'
import contentStyles from '~/styles/content.css'

import NewMessageButton from './NewMessageButton'
import NewMessageForm from './NewMessageForm'

export default class Outbound extends Component {
  render() {
    return (
      <div className={contentStyles.container}>
        <span className={typeStyles.h1}>Outbound</span>
        <div>
          <NewMessageButton />
        </div>
        <NewMessageForm />
      </div>
    )
  }
}
