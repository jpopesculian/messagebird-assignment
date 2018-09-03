import React, { Component } from 'react'
import { phoneOutgoing, phoneIncoming } from 'react-icons'
import NavigationItem from '../Item'

export default class NavigationList extends Component {
  render() {
    return (
      <ul>
        <NavigationItem title="Outbound" icon={phoneOutgoing} path="outbound" />
        <NavigationItem title="Inbound" icon={phoneIncoming} path="inbound" />
      </ul>
    )
  }
}
