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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createField = exports.Input = exports.Textarea = void 0;
var React = require("react");
var redux_form_1 = require("redux-form");
var eS = require("./controlForms.module.scss");
var f = require("../Auth/auth.module.scss");
var ControlForm = function (_a) {
    var _b = _a.meta, touched = _b.touched, error = _b.error, children = _a.children;
    var hasError = touched && error;
    return (React.createElement("div", { className: eS.validation__container },
        React.createElement("div", { className: f.login__form + " " + (hasError ? eS.validation__field : "") }, children),
        React.createElement("div", { className: eS.validation__message }, hasError && React.createElement("span", null, error))));
};
var Textarea = function (props) {
    var input = props.input, meta = props.meta, restProps = __rest(props, ["input", "meta"]);
    return (React.createElement(ControlForm, __assign({}, props),
        React.createElement("textarea", __assign({}, input, restProps))));
};
exports.Textarea = Textarea;
var Input = function (props) {
    var input = props.input, meta = props.meta, restProps = __rest(props, ["input", "meta"]);
    return (React.createElement(ControlForm, __assign({}, props),
        React.createElement("input", __assign({}, input, restProps, { className: f.login__style }))));
};
exports.Input = Input;
var createField = function (placeholder, name, validators, component, props, text) {
    if (props === void 0) { props = {}; }
    if (text === void 0) { text = ""; }
    return (React.createElement("div", null,
        React.createElement(redux_form_1.Field, __assign({ placeholder: placeholder, name: name, validate: validators, component: component, type: name }, props)),
        " ",
        text));
};
exports.createField = createField;
//# sourceMappingURL=ControlForm.js.map