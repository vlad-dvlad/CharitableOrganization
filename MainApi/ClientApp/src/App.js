"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Content_1 = require("./components/Content/Content");
var Footer_1 = require("./components/Footer/Footer");
var Header_1 = require("./components/Header/Header");
require("./App.scss");
var App = function () {
    return (React.createElement("div", { className: "wrapper" },
        React.createElement(Header_1.default, null),
        React.createElement(Content_1.default, null),
        React.createElement(Footer_1.default, null)));
};
exports.default = App;
//# sourceMappingURL=App.js.map