"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var redux_form_1 = require("redux-form");
var s = require("./auth.module.scss");
var Login = function (props) {
    var onSubmit = function (formData) {
        props.setLoginUser(formData.username, formData.password);
    };
    if (props.isAuth) {
        return React.createElement(react_router_dom_1.Redirect, { to: '/aboutus' });
    }
    return (React.createElement("div", null,
        React.createElement(LoginReduxForm, { onSubmit: onSubmit })));
};
var LoginForm = function (_a) {
    var handleSubmit = _a.handleSubmit;
    return (React.createElement("form", { onSubmit: handleSubmit, className: s.login },
        React.createElement("div", { className: s.login__container },
            React.createElement("div", { className: s.login__form },
                React.createElement(redux_form_1.Field, { component: "input", type: "text", name: "username", placeholder: "\u041B\u043E\u0433\u0456\u043D", className: s.login__style })),
            React.createElement("div", { className: s.login__form },
                React.createElement(redux_form_1.Field, { component: "input", type: "password", name: "password", placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C", className: s.login__style })),
            React.createElement("div", { className: s.login__btn },
                React.createElement("button", { className: s.login__submit }, "\u0412\u0445\u0456\u0434")))));
};
var LoginReduxForm = (0, redux_form_1.reduxForm)({
    form: "login"
})(LoginForm);
exports.default = Login;
//# sourceMappingURL=Login.js.map