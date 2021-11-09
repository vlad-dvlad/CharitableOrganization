"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
var App_1 = require("./App");
var registerServiceWorker_1 = require("./registerServiceWorker");
var react_router_dom_1 = require("react-router-dom");
var configStore_1 = require("./store/configStore");
ReactDOM.render(React.createElement(react_router_dom_1.BrowserRouter, null,
    React.createElement(react_redux_1.Provider, { store: configStore_1.store },
        React.createElement(App_1.default, null))), document.getElementById('root'));
(0, registerServiceWorker_1.default)();
//# sourceMappingURL=index.js.map