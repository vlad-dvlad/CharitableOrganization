"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var s = require("./navbar.module.scss");
var NavBar = function () {
    return (React.createElement("nav", { className: s.navbar },
        React.createElement("ul", { className: s.navbar__list },
            React.createElement("li", { className: s.navbar__item },
                React.createElement(react_router_dom_1.NavLink, { to: "/projects", className: s.text }, "\u041F\u0440\u043E\u0435\u043A\u0442\u0438")),
            React.createElement("li", { className: s.navbar__item },
                React.createElement(react_router_dom_1.NavLink, { to: "/reports", className: s.text }, "\u0417\u0432\u0456\u0442\u043D\u0456\u0441\u0442\u044C")),
            React.createElement("li", { className: s.navbar__item },
                React.createElement(react_router_dom_1.NavLink, { to: "/aboutus", className: s.text }, "\u041F\u0440\u043E \u043D\u0430\u0441")),
            React.createElement("li", { className: s.navbar__item },
                React.createElement(react_router_dom_1.NavLink, { to: "/login", className: s.text }, "\u0412\u0445\u0456\u0434")))));
};
exports.default = NavBar;
//# sourceMappingURL=NavBar.js.map