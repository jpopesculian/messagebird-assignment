import React, { Component } from 'react'
import { Icon } from 'react-icons'
import { observer } from 'mobx-react'
import navigationStore from '~/stores/navigation'
import styles from './styles.css'
import classnames from 'classnames'

@observer
export default class NavigationList extends Component {
  render() {
    const { title, icon, path } = this.props
    const active = path == navigationStore.path
    return (
      <li
        className={classnames(styles.base, { [styles.active]: active })}
        onClick={() => navigationStore.navigate(path)}
      >
        <span className={styles.icon}><Icon icon={icon} /></span>
        <span className={styles.title}>{title}</span>
      </li>
    )
  }
}
