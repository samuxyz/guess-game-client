import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import io from 'socket.io-client';
import reducer from './reducer';
import {setState} from './action_creators';
import remoteActionMiddleware from './remote_action_middleware';
import Start from './components/Start';
import {createStore, applyMiddleware} from 'redux';
import App from './components/App';
import {GuessingContainer} from './components/Guessing';
import {AddContainer} from './components/Add';


const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state => store.dispatch(setState(state))
);

const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducer);


const routes = <Route component={App}>
  <Route path="/" component={Start} />
  <Route path="/play" component={GuessingContainer} />
  <Route path="/add" component={AddContainer} />
</Route>;



ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);