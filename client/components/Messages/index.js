import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { map } from 'lodash'
import styles from './styles.css'
import Message from '~/components/Message'

export default class Messages extends Component {
  render() {
    return (
      <div>
        {map(
          message => <Message key={message.id} {...message} />,
          this.props.messages
        )}
      </div>
    )
  }
}
