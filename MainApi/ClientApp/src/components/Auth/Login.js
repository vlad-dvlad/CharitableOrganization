"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_1 = require("react-router");
var redux_form_1 = require("redux-form");
var auth_1 = require("../../store/actionCreators/auth");
var s = require("./auth.module.scss");
var Login = function (props) {
    var onSubmit = function (formData) {
        (0, auth_1.setLoginUser)(formData.username, formData.password);
    };
    if (props.isAuth) {
        return React.createElement(react_router_1.Redirect, { to: '/' });
    }
    return (React.createElement("div", null,
        React.createElement(LoginReduxForm, { onSubmit: onSubmit })));
};
var LoginForm = function (props) {
    var handleSubmit = __assign({}, props);
    console.log("dfskjlkdfjslkjl");
    return (React.createElement("form", { onSubmit: handleSubmit, className: s.login },
        React.createElement("div", { className: s.login__container },
            React.createElement("div", { className: s.login__form },
                React.createElement("input", { type: "text", name: "username", placeholder: "\u041B\u043E\u0433\u0456\u043D", className: s.login__style })),
            React.createElement("div", { className: s.login__form },
                React.createElement("input", { type: "password", name: "password", placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C", className: s.login__style })),
            React.createElement("div", { className: s.login__btn },
                React.createElement("button", { className: s.login__submit }, "\u0412\u0445\u0456\u0434")))));
};
var LoginReduxForm = (0, redux_form_1.reduxForm)({
    form: "login"
})(LoginForm);
exports.default = Login;
//# sourceMappingURL=Login.js.map