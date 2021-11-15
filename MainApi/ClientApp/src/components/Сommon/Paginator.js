"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var s = require("./paginator.module.scss");
var Paginator = function (props) {
    var totalProjectsCount = props.totalProjectsCount, pageSize = props.pageSize, currentPage = props.currentPage;
    var portionSize = 6;
    var pageCount = Math.ceil(totalProjectsCount);
    var pages = [];
    for (var i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    var portionCount = Math.ceil(pageCount / portionSize);
    var _a = (0, react_1.useState)(1), portionNumber = _a[0], setPortionNumber = _a[1];
    var leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    var rightPortionPageNumber = portionNumber * portionSize;
    return (React.createElement("div", { className: s.page + " " + s.page__container },
        portionCount > 1 &&
            React.createElement("button", { className: s.page_btn, onClick: function () { return setPortionNumber(portionNumber - 1); } }, "\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456"),
        pages
            .filter(function (p) { return p >= leftPortionPageNumber && p <= rightPortionPageNumber; })
            .map(function (p) {
            return React.createElement("span", { className: currentPage === p && s.page__selected, onClick: function () { props.setPage(p); }, key: p }, p);
        })));
};
exports.default = Paginator;
//# sourceMappingURL=Paginator.js.map