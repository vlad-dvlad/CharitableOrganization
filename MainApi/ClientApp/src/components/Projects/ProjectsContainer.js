"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var useTypedSelector_1 = require("../../hooks/useTypedSelector");
var useActions_1 = require("../../hooks/useActions");
var Projects_1 = require("./Projects");
var react_1 = require("react");
var ProjectsContainer = function () {
    var _a = (0, useTypedSelector_1.usedTypedSelector)(function (state) { return state.projects; }), projects = _a.projects, pageSize = _a.pageSize, totalProjectsCount = _a.totalProjectsCount, currentPage = _a.currentPage, isFetching = _a.isFetching, isFollowingInProgress = _a.isFollowingInProgress;
    var _b = (0, useActions_1.useActions)(), getProjects = _b.getProjects, setPage = _b.setPage;
    (0, react_1.useEffect)(function () {
        getProjects(pageSize, currentPage);
    }, [currentPage]);
    var onPageChanged = function (pageNum) {
        getProjects(pageSize, pageNum);
    };
    return (React.createElement("div", null,
        React.createElement(Projects_1.default, { projects: projects, pageSize: pageSize, totalProjectsCount: totalProjectsCount, currentPage: currentPage, isFetching: isFetching, isFollowingInProgress: isFollowingInProgress, onPageChanged: onPageChanged })));
};
exports.default = ProjectsContainer;
//# sourceMappingURL=ProjectsContainer.js.map