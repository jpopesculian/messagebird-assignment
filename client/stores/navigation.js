import { observable, action, computed, autorun } from 'mobx'
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
    this.syncDocumentTitle()
  }

  subscribe = () =>
    (window.onpopstate = ({ state }) => this.navigate(state, false))

  syncDocumentTitle = () =>
    autorun(() => (window.document.title = `${this.title} - MessageBird`))

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

  @computed get title() {
    switch (this.path) {
      case paths.OUTBOUND:
        return 'Outbound'
      case paths.INBOUND:
        return 'Inbound'
      case paths.NOT_FOUND:
        return 'Woops'
    }
    return 'Loading'
  }
}

export default new NavigationStore()
