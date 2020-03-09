import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { STORE } from './Store';
import './index.scss';
import App from './App';

ReactDOM.render(
    <Provider store={STORE}>
        <App />
    </Provider>,
    document.getElementById('root')
);
