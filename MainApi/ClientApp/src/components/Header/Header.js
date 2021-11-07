"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var NavBar_1 = require("../NavBar/NavBar");
var s = require("./header.module.scss");
var Header = function () {
    return (React.createElement("header", { className: s.header },
        React.createElement("div", { className: s.header__container },
            React.createElement("div", { className: s.header__main },
                React.createElement("div", { className: s.header__company },
                    React.createElement("h2", null, "\u0411\u043B\u0430\u0433\u043E\u0434\u0456\u0439\u043D\u0430 \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044F")),
                React.createElement("div", { className: s.header__content },
                    React.createElement(NavBar_1.default, null))))));
};
exports.default = Header;
//# sourceMappingURL=Header.js.map