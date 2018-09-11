import React, { Component } from 'react'
import styles from './styles.css'
import classnames from 'classnames'

export default class Field extends Component {
  render() {
    const { title, value, isFirst, isLast } = this.props
    return (
      <div
        className={classnames(styles.container, {
          [styles.first]: isFirst,
          [styles.last]: isLast
        })}
      >
        <div className={styles.title}>{title}</div>
        <div className={styles.value}>{value}</div>
      </div>
    )
  }
}
