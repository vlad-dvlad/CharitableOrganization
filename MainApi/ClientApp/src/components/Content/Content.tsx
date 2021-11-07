import { mainModule } from 'process';
import * as React from 'react';

const s = require("./content.module.scss");

const Content = () => {
    return (
        <main className={ s.content }>
        </main>
    );
}

export default Content;