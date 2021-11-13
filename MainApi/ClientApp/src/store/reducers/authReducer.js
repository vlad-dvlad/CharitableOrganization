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
exports.authReducer = void 0;
var auth_1 = require("../../types/auth/auth");
var initialState = {
    userId: 0,
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    loading: false,
    error: null,
    isAuth: false,
    isRegister: true,
};
/**
 *
 * @param state - initial State for registration
 * @param action - action operations for check register, set user (success, error)
 */
var authReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case auth_1.AuthActionTypes.SET_REGISTER:
            return __assign(__assign({}, state), { isRegister: action.flag });
        case auth_1.AuthActionTypes.SET_USER:
            return __assign(__assign({}, state), { loading: true, error: null, username: action.username }); // доробити
        case auth_1.AuthActionTypes.SET_USER_SUCCESS:
            return __assign(__assign({}, state), { loading: false, error: null, isAuth: action.isAuth });
        case auth_1.AuthActionTypes.SET_USER_ERROR:
            return __assign(__assign({}, state), { loading: false, error: action.payload });
        case auth_1.AuthActionTypes.SET_REGISTER_USER:
            return __assign(__assign({}, state), { isRegister: true });
        default: return state;
    }
};
exports.authReducer = authReducer;
//# sourceMappingURL=authReducer.js.map