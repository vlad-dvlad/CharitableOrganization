import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/configStore';


ReactDOM.render(
    <BrowserRouter>
        <Provider store={ store } >
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));


