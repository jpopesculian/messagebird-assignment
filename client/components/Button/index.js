import React, { Component } from 'react'
import { Icon, loader } from 'react-icons'
import classnames from 'classnames'
import styles from './styles.css'

export default class Button extends Component {
  render() {
    const { onPress, icon, title, loading, disabled } = this.props
    return (
      <button
        className={styles.button}
        type="button"
        onClick={onPress}
        disabled={disabled || loading}
      >
        <span
          className={classnames(styles.icon, { [styles.iconLoading]: loading })}
        >
          <Icon icon={loading ? loader : icon} />
        </span>
        <span className={styles.title}>
          {title}
        </span>
      </button>
    )
  }
}
