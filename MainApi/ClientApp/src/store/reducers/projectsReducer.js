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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectsReducer = void 0;
var projects_1 = require("../../types/projects/projects");
var initialState = {
    projects: [],
    pageSize: 6,
    totalProjectsCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: [],
};
var projectsReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case projects_1.ProjectsActionTypes.FOLLOW:
            return __assign({}, state);
        case projects_1.ProjectsActionTypes.UNFOLLOW:
            return __assign({}, state);
        case projects_1.ProjectsActionTypes.TOGGLE_IS_FETCHING:
            return __assign(__assign({}, state), { isFetching: action.isFetching });
        case projects_1.ProjectsActionTypes.SET_CURRENT_PAGE:
            return __assign(__assign({}, state), { currentPage: action.currentPage });
        case projects_1.ProjectsActionTypes.SET_PROJECTS:
            return __assign(__assign({}, state), { projects: __spreadArray([], action.projects, true) });
        case projects_1.ProjectsActionTypes.SET_TOTAL_COUNT:
            return __assign(__assign({}, state), { totalProjectsCount: action.count });
        default: return state;
    }
};
exports.projectsReducer = projectsReducer;
//# sourceMappingURL=projectsReducer.js.map