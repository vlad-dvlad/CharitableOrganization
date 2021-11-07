"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var App_1 = require("./App");
var registerServiceWorker_1 = require("./registerServiceWorker");
var react_router_dom_1 = require("react-router-dom");
ReactDOM.render(React.createElement(react_router_dom_1.BrowserRouter, null,
    React.createElement(App_1.default, null)), document.getElementById('root'));
(0, registerServiceWorker_1.default)();
//# sourceMappingURL=index.js.map