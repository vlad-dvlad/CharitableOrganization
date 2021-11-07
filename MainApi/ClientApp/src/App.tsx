import * as React from 'react';
import { Route } from 'react-router';
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

export default App;
