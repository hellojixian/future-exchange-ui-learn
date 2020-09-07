import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { history, configureStore } from './redux'

// import sagas from './redux/sagas'
// import wsMiddleware from './redux/middleware/ws'
// import gaMiddleware from './redux/middleware/ga'

const config = {
  development: true,
  // sagas,
}

const optionalMiddleware = [
  // wsMiddleware(),
  // gaMiddleware(),
]

const store = configureStore(
  config,
  optionalMiddleware,
)

window._store = store

export default class StoreWrapper extends React.PureComponent {
  render() {
    const { children } = this.props // eslint-disable-line

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          {children}
        </ConnectedRouter>
      </Provider>
    )
  }
}
