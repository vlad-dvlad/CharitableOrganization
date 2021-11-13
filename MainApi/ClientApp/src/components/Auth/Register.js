"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_form_1 = require("redux-form");
var ControlForm_1 = require("../\u0421ommon/ControlForm");
var validators_1 = require("../../utils/validators");
var s = require("./auth.module.scss");
var Register = function (props) {
    var onSubmit = function (formData) {
        props.setRegisterUserProfile(formData.firstName, formData.lastName, formData.email, formData.password, formData.username);
    };
    /*    if (props.isRegister) {
            return <Redirect to={'/aboutus'} />
        }*/
    return (React.createElement("div", null,
        React.createElement(RegisterReduxForm, { onSubmit: onSubmit })));
};
var RegisterForm = function (_a) {
    var handleSubmit = _a.handleSubmit;
    return (React.createElement("form", { onSubmit: handleSubmit, className: s.login },
        React.createElement("div", { className: s.login__container },
            React.createElement("div", { className: s.login__form },
                React.createElement(redux_form_1.Field, { component: ControlForm_1.Input, type: "text", name: "fname", placeholder: "\u0406\u043C'\u044F", className: s.login__style, validate: validators_1.required })),
            React.createElement("div", { className: s.login__form },
                React.createElement(redux_form_1.Field, { component: ControlForm_1.Input, type: "text", name: "lname", placeholder: "\u041F\u0440\u0456\u0437\u0438\u0432\u0449\u0435", className: s.login__style, validate: validators_1.required })),
            React.createElement("div", { className: s.login__form },
                React.createElement(redux_form_1.Field, { component: ControlForm_1.Input, type: "email", name: "email", placeholder: "\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430", className: s.login__style, validate: validators_1.required })),
            React.createElement("div", { className: s.login__form },
                React.createElement(redux_form_1.Field, { component: ControlForm_1.Input, type: "text", name: "username", placeholder: "\u041B\u043E\u0433\u0456\u043D", className: s.login__style, validate: validators_1.required })),
            React.createElement("div", { className: s.login__form },
                React.createElement(redux_form_1.Field, { component: ControlForm_1.Input, type: "password", name: "password", placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C", className: s.login__style, validate: validators_1.required })),
            React.createElement("div", { className: s.login__btn },
                React.createElement("button", { className: s.login__submit }, "\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044C"),
                React.createElement("div", null, "\u0423\u0436\u0435 \u043C\u0430\u0454\u0442\u0435 \u0430\u043A\u0430\u0443\u043D\u0442? \u0412\u0438\u043A\u043E\u043D\u0430\u0439\u0442\u0435 \u0432\u0445\u0456\u0434"),
                React.createElement("button", null, "\u0412\u0445\u0456\u0434")))));
};
var RegisterReduxForm = (0, redux_form_1.reduxForm)({
    form: "register"
})(RegisterForm);
exports.default = Register;
//# sourceMappingURL=Register.js.map