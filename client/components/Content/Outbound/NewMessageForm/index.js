import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { send } from 'react-icons'
import newMessageStore from '~/stores/newMessage'
import styles from './styles.css'
import typeStyles from '~/styles/typography.css'
import Modal from '~/components/Modal'
import Input from '~/components/Input'
import Button from '~/components/Button'

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
            error={newMessageStore.numberError}
            value={newMessageStore.number}
            onBlur={() => newMessageStore.validateNumber()}
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
          <div className={styles.footer}>
            <div className={styles.error}>
              {newMessageStore.errorString}
            </div>
            <div className={styles.submit}>
              <Button
                title="Send"
                icon={send}
                loading={newMessage.sending}
                disabled={!newMessageStore.valid}
                onPress={() => newMessageStore.send()}
              />
            </div>
          </div>
        </form>
      </Modal>
    )
  }
}
