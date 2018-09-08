import React, { Component } from 'react'
import styles from './styles.css'

export default class NotFound extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.title}>404</span>
          <span className={styles.subtitle}>
            Oops! You got a little lost.
          </span>
        </div>
      </div>
    )
  }
}
