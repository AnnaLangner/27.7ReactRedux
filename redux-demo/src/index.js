import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import {createComment1, editComment1, removeComment1, thumbDownComment1, thumbUpComment1} from './actions';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

store.dispatch(createComment1('pierwszy komentarz'));
store.dispatch(createComment1('drugi komentarz'));

serviceWorker.unregister();
