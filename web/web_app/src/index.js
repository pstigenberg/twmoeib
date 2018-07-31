import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore, { history } from './store/configureStore';
import Root from './components/Root';
import './styles/styles.scss'; 

import { loadSettings } from './actions/settingsActions';

const store = configureStore;
store.dispatch(loadSettings());

render(
    <Provider store={store}>
        <Root store={store} history={history} />
    </Provider>,
    document.getElementById('app')
);