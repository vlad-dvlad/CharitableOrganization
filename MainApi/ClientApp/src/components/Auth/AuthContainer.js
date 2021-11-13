"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Login_1 = require("./Login");
var Register_1 = require("./Register");
var useTypedSelector_1 = require("../../hooks/useTypedSelector");
var useActions_1 = require("../../hooks/useActions");
var s = require("./auth.module.scss");
var AuthContainer = function () {
    var isRegister = (0, useTypedSelector_1.usedTypedSelector)(function (state) { return state.auth.isRegister; });
    var isAuth = (0, useTypedSelector_1.usedTypedSelector)(function (state) { return state.auth.isAuth; });
    var _a = (0, useActions_1.useActions)(), setRegisterUser = _a.setRegisterUser, setLoginUser = _a.setLoginUser, setRegisterUserProfile = _a.setRegisterUserProfile;
    var setRegister = function (flag) {
        setRegisterUser(flag);
    };
    return (React.createElement("div", null,
        isRegister && React.createElement(Login_1.default, { setLoginUser: setLoginUser, isAuth: isAuth }),
        !isRegister && React.createElement(Register_1.default, { setRegisterUserProfile: setRegisterUserProfile, isRegister: isRegister }),
        React.createElement("div", { onClick: function () { return setRegister(false); } }, "Registration")));
};
exports.default = AuthContainer;
//# sourceMappingURL=AuthContainer.js.map