import React, { Component } from 'react'
import { observer } from 'mobx-react'
import navigationStore, { paths } from '~/stores/navigation'
import NotFound from './NotFound'
import Outbound from './Outbound'
import Inbound from './Inbound'

@observer
export default class Content extends Component {
  render() {
    let Page = NotFound
    switch (navigationStore.path) {
      case paths.OUTBOUND:
        Page = Outbound
        break
      case paths.INBOUND:
        Page = Inbound
        break
    }
    return <Page />
  }
}
