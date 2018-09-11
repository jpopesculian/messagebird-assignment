import React, { Component } from 'react'
import { observer } from 'mobx-react'
import styles from './styles.css'
import typeStyles from '~/styles/typography.css'
import contentStyles from '~/styles/content.css'
import inboundMessagesStore from '~/stores/inboundMessages'

import Messages from '~/components/Messages'

@observer
export default class Outbound extends Component {
  render() {
    return (
      <div className={contentStyles.container}>
        <div className={styles.header}>
          <span className={typeStyles.h1}>Inbound</span>
        </div>
        <Messages
          messages={inboundMessagesStore.messageList}
          more={inboundMessagesStore.more}
          error={inboundMessagesStore.error}
          loading={inboundMessagesStore.loading}
          load={() => inboundMessagesStore.load()}
        />
      </div>
    )
  }
}
