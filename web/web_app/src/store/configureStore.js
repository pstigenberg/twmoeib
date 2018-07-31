import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';

export const history = createHistory();

const reactRouterMiddleware = routerMiddleware(history);
const middlewares = [
    thunk,
    reactRouterMiddleware,
];
const configureStore = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares))
);

export default configureStore;