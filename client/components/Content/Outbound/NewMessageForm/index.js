import React, { Component } from 'react'
import { observer } from 'mobx-react'
import newMessageStore from '~/stores/newMessage'
import styles from './styles.css'
import typeStyles from '~/styles/typography.css'
import Modal from '~/components/Modal'
import Input from '~/components/Input'

@observer
export default class NewMessageForm extends Component {
  render() {
    return (
      <Modal
        active={newMessageStore.visible}
        onClose={() => newMessageStore.hide()}
      >
        <span className={typeStyles.h2}>
          New Message
        </span>
        <form>
          <Input
            name="number"
            label="Number"
            type="tel"
            required={true}
            value={newMessageStore.number}
            onChange={({ value }) => newMessageStore.setNumber(value)}
          />
          <Input
            name="body"
            label="Body"
            type="textarea"
            required={true}
            value={newMessageStore.body}
            onChange={({ value }) => newMessageStore.setBody(value)}
          />
        </form>
      </Modal>
    )
  }
}
