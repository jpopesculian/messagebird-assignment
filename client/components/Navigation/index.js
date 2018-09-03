import React, { Component } from 'react'
import styles from './style.css'
import Logo from '../Logo'
import NavigationList from './List'

export default class Navigation extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Logo />
        <NavigationList />
      </div>
    )
  }
}
