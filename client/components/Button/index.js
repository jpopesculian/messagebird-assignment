import React, { Component } from 'react'
import { Icon, loader } from 'react-icons'
import classnames from 'classnames'
import styles from './styles.css'

export default class Button extends Component {
  render() {
    const { onPress, icon, title, loading, disabled, className } = this.props
    const actualIcon = loading ? loader : icon
    return (
      <button
        className={classnames(styles.button, className)}
        type="button"
        onClick={onPress}
        disabled={disabled || loading}
      >
        {actualIcon
          ? <span
              className={classnames(styles.icon, {
                [styles.iconLoading]: loading
              })}
            >
              <Icon icon={actualIcon} />
            </span>
          : null}
        <span className={styles.title}>
          {title}
        </span>
      </button>
    )
  }
}
