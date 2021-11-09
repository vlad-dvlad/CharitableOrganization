
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/configStore';


ReactDOM.render(
    <BrowserRouter>
        <Provider store={ store } >
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));

registerServiceWorker();
