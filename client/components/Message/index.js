import React, { Component } from 'react'
import Field from './Field'
import styles from './styles.css'
import { first } from 'lodash'

export default class Message extends Component {
  render() {
    const {
      direction,
      recipients,
      createdDatetime,
      scheduledDatetime,
      originator,
      body
    } = this.props
    const recipient = first(recipients.items) || {}
    return (
      <div className={styles.container}>
        <Field title="Type" value={direction} />
        <Field title="From" value={originator} />
        <Field title="To" value={recipient.recipient} />
        <Field title="Body" value={body} />
        <Field title="Status" value={recipient.status} />
        <Field title="Created" value={createdDatetime || scheduledDatetime} />
        <Field title="Updated" value={recipient.statusDatetime} />
      </div>
    )
  }
}
