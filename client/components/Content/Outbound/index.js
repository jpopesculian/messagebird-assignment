import React, { Component } from 'react'
import { observer } from 'mobx-react'
import styles from './styles.css'
import typeStyles from '~/styles/typography.css'
import contentStyles from '~/styles/content.css'
import outboundMessagesStore from '~/stores/outboundMessages'

import NewMessageButton from './NewMessageButton'
import NewMessageForm from './NewMessageForm'
import Messages from '~/components/Messages'

@observer
export default class Outbound extends Component {
  render() {
    return (
      <div className={contentStyles.container}>
        <div className={styles.header}>
          <span className={typeStyles.h1}>Outbound</span>
          <div><NewMessageButton /></div>
        </div>
        <Messages messages={outboundMessagesStore.messageList} />
        <NewMessageForm />
      </div>
    )
  }
}
