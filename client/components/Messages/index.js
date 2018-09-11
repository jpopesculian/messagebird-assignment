import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { map } from 'lodash'
import styles from './styles.css'
import Message from '~/components/Message'
import Button from '~/components/Button'

export default class Messages extends Component {
  render() {
    const { messages, more, error, loading, load } = this.props
    if (messages.length > 0 || loading) {
      return (
        <div className={styles.container}>
          {map(message => <Message key={message.id} {...message} />, messages)}
          {more
            ? <div className={styles.button}>
                <Button
                  title={loading ? 'Loading' : 'More'}
                  loading={loading}
                  onPress={load}
                />
              </div>
            : null}
        </div>
      )
    }
    if (error) {
      return <div className={styles.alert}>Ooops! Something went wrong.</div>
    }
    return (
      <div className={styles.alert}>
        There doesn't seem to be anything here :(
      </div>
    )
  }
}
