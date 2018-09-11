import React, { Component, Fragment } from 'react'
import Field from './Field'
import NumberValue from './NumberValue'
import TimeValue from './TimeValue'
import StatusValue from './StatusValue'
import DirectionValue from './DirectionValue'
import BodyValue from './BodyValue'
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
      <Fragment>
        <Field
          title="Type"
          value={<DirectionValue direction={direction} />}
          isFirst={true}
        />
        <Field title="From" value={<NumberValue number={originator} />} />
        <Field
          title="To"
          value={<NumberValue number={recipient.recipient} />}
        />
        <Field title="Body" value={<BodyValue body={body} />} />
        <Field
          title="Status"
          value={<StatusValue status={recipient.status} />}
        />
        <Field
          title="Created"
          value={<TimeValue time={createdDatetime || scheduledDatetime} />}
        />
        <Field
          title="Updated"
          value={<TimeValue time={recipient.statusDatetime} />}
          isLast={true}
        />
      </Fragment>
    )
  }
}
