import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware,compose} from 'redux'
import allReducers from './Reducers/allreducers.js'
import thunk from 'redux-thunk'
import {reduxFirestore,getFirestore} from 'redux-firestore'
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase'
import Fire from './Fire.js'
const store = createStore(allReducers,

 compose(
 applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
 reduxFirestore(Fire),
 reactReduxFirebase(Fire),
 reactReduxFirebase(Fire)
	)
 );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
	serviceWorker.unregister();




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


