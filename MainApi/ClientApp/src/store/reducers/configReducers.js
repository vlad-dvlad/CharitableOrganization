"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = void 0;
var redux_1 = require("redux");
var redux_form_1 = require("redux-form");
var authReducer_1 = require("./authReducer");
exports.rootReducer = (0, redux_1.combineReducers)({
    auth: authReducer_1.authReducer,
    form: redux_form_1.reducer,
});
//# sourceMappingURL=configReducers.js.map