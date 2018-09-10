import React, { Component } from 'react'
import styles from './styles.css'
import classnames from 'classnames'
import { isEmpty, defaults, noop } from 'lodash'

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false,
      error: null
    }
  }
  render() {
    const {
      label,
      type,
      name,
      required,
      onChange,
      onFocus,
      onBlur,
      value,
      error
    } = defaults(
      {
        onBlur: noop,
        onChange: noop,
        onFocus: noop
      },
      this.props
    )
    const labelShouldFloat = this.state.focused || !isEmpty(value)
    const anyError = isEmpty(this.state.error) ? error : this.state.error
    const hasError = !isEmpty(anyError)
    const inputProps = {
      type,
      name,
      value,
      className: classnames(styles.input, { [styles.inputError]: hasError }),
      onChange: event => {
        this.onChange(event)
        onChange({ value: event.target.value })
      },
      onBlur: event => {
        this.onBlur(event)
        onBlur(event)
      },
      onFocus: event => {
        this.onFocus(event)
        onFocus(event)
      }
    }
    return (
      <div className={styles.formgroup}>
        <div className={styles.inputWrapper}>
          {required ? <div className={styles.required} /> : null}
          <label
            htmlFor={name}
            className={classnames(styles.label, {
              [styles.labelFloating]: labelShouldFloat
            })}
          >
            {label}
          </label>
          {type == 'textarea'
            ? <textarea {...inputProps} />
            : <input {...inputProps} />}
          <div className={styles.error}>{anyError}</div>
        </div>
      </div>
    )
  }

  onChange() {
    this.setState({ error: null })
  }

  onFocus() {
    this.setState({ focused: true })
  }

  onBlur() {
    const { required, value, label } = this.props
    this.setState({
      focused: false,
      error: isEmpty(value) && required ? `${label} is required` : null
    })
  }
}
