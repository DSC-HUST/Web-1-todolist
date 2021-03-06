import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components';
import {createStore, compose, applyMiddleware} from 'redux';
import {reducers} from './reducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import "./components/signup/Form.css"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, 
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


