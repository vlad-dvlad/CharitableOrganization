import * as React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import s from "./App.module.scss";
import Header from './components/Header/Header';

import './custom.css'

const App = () => {
    return (
        <div className={s.wrapper}>
           <Header />
        </div>
    );
}

const MainApp = () => {
    <BrowserRouter>
        {/*<Provider store={{}}>*/}

        {/*</Provider>*/}
    </BrowserRouter>
}

export default App;
