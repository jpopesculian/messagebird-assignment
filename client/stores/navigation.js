import { observable, action } from 'mobx'
import { includes, values, reject, isEmpty, first } from 'lodash'

export const paths = {
  NOT_FOUND: 'notfound',
  OUTBOUND: 'outbound',
  INBOUND: 'inbound'
}

class NavigationStore {
  @observable path = paths.OUTBOUND

  constructor() {
    this.navigate(
      first(reject(isEmpty, window.location.pathname.split('/'))) ||
        paths.OUTBOUND,
      false
    )
    this.subscribe()
  }

  @action subscribe = () =>
    (window.onpopstate = ({ state }) => this.navigate(state, false))

  @action navigate = (path, push = true) => {
    if (!includes(path, values(paths))) {
      this.path = paths.NOT_FOUND
    } else {
      this.path = path
    }
    if (push) {
      window.history.pushState(path, {}, path)
    }
  }
}

export default new NavigationStore()
