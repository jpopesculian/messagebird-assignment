import React, { Component } from 'react'
import { observer } from 'mobx-react'
import newMessageStore from '~/stores/newMessage'
import styles from './styles.css'
import Modal from '~/components/Modal'

@observer
export default class NewMessageForm extends Component {
  render() {
    return (
      <Modal
        active={newMessageStore.visible}
        onClose={() => newMessageStore.hide()}
      >
        Hello
      </Modal>
    )
  }
}
