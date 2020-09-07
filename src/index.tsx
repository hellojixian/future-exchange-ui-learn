import React from 'react';
import ReactDOM from 'react-dom';
import Debug from 'debug'
import { Scrollbars } from 'react-custom-scrollbars'
import './index.css';

import UI from './componets/UI/App';
import StoreWrapper from './StoreWrapper';

const debug = Debug('ui:main')
const LOCAL_STORAGE_VERSION_KEY = 'UI_VERSION'
const LOCAL_STORAGE_VERSION = 1

if (localStorage) {
  const version = localStorage.getItem(LOCAL_STORAGE_VERSION_KEY)

  if (!version || parseFloat(version) < LOCAL_STORAGE_VERSION) {
    localStorage.clear()
    localStorage.setItem(LOCAL_STORAGE_VERSION_KEY, LOCAL_STORAGE_VERSION.toString())
    localStorage.debug = 'ui:*'
    debug('local storage version mis-match, cleared')
    window.location.reload()
  } else {
    debug('local storage DB version %s', version)
  }
}

ReactDOM.render(
  <Scrollbars
    style={{
      height: '100%',
    }}
  >
    <StoreWrapper>
      <UI />
    </StoreWrapper>
  </Scrollbars>,
  document.getElementById('root')
);

