import { createStore } from 'redux';
import { homesReducer } from './reducers/homes';

export const STORE = createStore(
    homesReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
