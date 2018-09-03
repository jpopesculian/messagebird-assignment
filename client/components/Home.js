import React, { Component } from 'react'
import messagesStore from '../stores/messages'

export default class Home extends Component {
  render() {
    return <div>Hello</div>
  }

  componentDidMount() {
    messagesStore.init()
  }
}
