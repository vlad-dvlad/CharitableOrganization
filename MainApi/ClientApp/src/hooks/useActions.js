"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useActions = void 0;
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var combineActions_1 = require("../store/actionCreators/combineActions");
var useActions = function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    return (0, redux_1.bindActionCreators)(combineActions_1.default, dispatch);
};
exports.useActions = useActions;
//# sourceMappingURL=useActions.js.map