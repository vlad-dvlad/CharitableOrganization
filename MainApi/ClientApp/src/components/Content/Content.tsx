import { mainModule } from 'process';
import * as React from 'react';
import { Route } from 'react-router';
import AboutUs from '../AboutUs/AboutUs';
import AuthContainer from '../Auth/AuthContainer';
import Projects from '../Projects/Projects';
import Reports from '../Reports/Reports';

const s = require("./content.module.scss");

const Content = () => {
    return (
        <main className={`${s.content} ${s.content__container}`}>
            <Route path="/projects" render={() => <Projects />} />
            <Route path="/reports" render={() => <Reports />} />
            <Route path="/login" render={() => <AuthContainer />} />
            <Route path="/aboutus" render={() => <AboutUs />} />
        </main>
    );
}

export default Content;