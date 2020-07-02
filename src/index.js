import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
import { configureFakeBackend } from './_helpers/fake-backend';
import { Provider } from 'react-redux';
import { store } from './_helpers/store';
configureFakeBackend();
ReactDOM.render(
    <Provider store={store}>
         <App />
    </Provider>,  
     document.getElementById('root')
     );


