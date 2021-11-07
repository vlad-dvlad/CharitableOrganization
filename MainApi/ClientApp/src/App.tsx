import * as React from 'react';
import Content from './components/Content/Content';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import "./App.scss";

const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default App;
