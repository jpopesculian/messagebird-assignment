import React, { Component } from 'react'
import { plusSquare } from 'react-icons'
import Button from '~/components/Button'
import newMessageStore from '~/stores/newMessage'

export default class NewMessageButton extends Component {
  render() {
    return (
      <Button
        onPress={() => newMessageStore.show()}
        title="New Message"
        icon={plusSquare}
      />
    )
  }
}
