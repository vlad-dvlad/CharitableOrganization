"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_1 = require("react-router");
var AboutUs_1 = require("../AboutUs/AboutUs");
var AuthContainer_1 = require("../Auth/AuthContainer");
var Projects_1 = require("../Projects/Projects");
var Reports_1 = require("../Reports/Reports");
var s = require("./content.module.scss");
var Content = function () {
    return (React.createElement("main", { className: s.content + " " + s.content__container },
        React.createElement(react_router_1.Route, { path: "/projects", render: function () { return React.createElement(Projects_1.default, null); } }),
        React.createElement(react_router_1.Route, { path: "/reports", render: function () { return React.createElement(Reports_1.default, null); } }),
        React.createElement(react_router_1.Route, { path: "/login", render: function () { return React.createElement(AuthContainer_1.default, null); } }),
        React.createElement(react_router_1.Route, { path: "/aboutus", render: function () { return React.createElement(AboutUs_1.default, null); } })));
};
exports.default = Content;
//# sourceMappingURL=Content.js.map