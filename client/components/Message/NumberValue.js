import React, { Component } from 'react'
import PhoneNumber from 'awesome-phonenumber'

export default class NumberValue extends Component {
  render() {
    if (!this.props.number) {
      return null
    }
    const pn = new PhoneNumber(this.props.number.toString(), 'US')
    return pn.getNumber('international')
  }
}
