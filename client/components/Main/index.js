import React, { Component } from 'react'
import styles from './style.css'
import Navigation from '../Navigation'
import Content from '../Content'

export default class Main extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.navBarContainer}>
          <Navigation />
        </div>
        <div className={styles.contentContainer}>
          <Content />
        </div>
      </div>
    )
  }
}
