import React, { Component } from 'react'
import styles from './styles.css'
import { truncate } from 'lodash'
import Button from '~/components/Button'

const MAX_LENGTH = 140

export default class BodyValue extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false
    }
  }
  render() {
    const { body } = this.props
    const shouldTruncate = body.length > MAX_LENGTH - 3

    let parsedBody = body
    let Toggle = null
    let toggleProps = {
      type: 'button',
      className: styles.toggle
    }

    if (shouldTruncate) {
      if (this.state.expanded) {
        Toggle = (
          <Button
            {...toggleProps}
            title="Less"
            onPress={() => this.contract()}
          />
        )
      } else {
        parsedBody = truncate({ length: MAX_LENGTH, separator: /\s/ }, body)
        Toggle = (
          <Button {...toggleProps} title="More" onPress={() => this.expand()} />
        )
      }
    }
    return <span className={styles.body}>{parsedBody}{Toggle}</span>
  }

  expand() {
    this.setState({ expanded: true })
  }

  contract() {
    this.setState({ expanded: false })
  }
}
