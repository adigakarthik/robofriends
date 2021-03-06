import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import {logger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import App from './Container/app';
import {searchRobots,requestRobots} from './reducer';

//we can create a single root by merging all reducers
const rootReducer = combineReducers(
  {searchRobots,requestRobots}
)
const store 
= createStore(rootReducer,applyMiddleware(thunkMiddleware,logger));


ReactDOM.render(
  <React.StrictMode>
  {/* Storing redux store as Prop */}
  {/* <App store={store}/> */}
  <Provider store={store}>
    <App/>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
