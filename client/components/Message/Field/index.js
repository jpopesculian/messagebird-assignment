import React, { Component } from 'react'
import styles from './styles.css'

export default class Field extends Component {
  render() {
    const { title, value } = this.props
    return (
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.value}>{value}</div>
      </div>
    )
  }
}
