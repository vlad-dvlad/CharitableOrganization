"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjects = exports.toggleIsFollowingProgress = exports.toggleIsFetching = exports.setProjectCount = exports.setProject = exports.setPage = exports.unfollow = exports.follow = void 0;
var projects_1 = require("../../types/projects/projects");
var api_1 = require("../../api/api");
var follow = function (userId) { return ({ type: projects_1.ProjectsActionTypes.FOLLOW, userId: userId }); };
exports.follow = follow;
var unfollow = function (userId) { return ({ type: projects_1.ProjectsActionTypes.UNFOLLOW, userId: userId }); };
exports.unfollow = unfollow;
var setPage = function (currentPage) { return ({ type: projects_1.ProjectsActionTypes.SET_CURRENT_PAGE, currentPage: currentPage }); };
exports.setPage = setPage;
var setProject = function (project) { return ({ type: projects_1.ProjectsActionTypes.SET_PROJECTS, project: project }); };
exports.setProject = setProject;
var setProjectCount = function (count) { return ({ type: projects_1.ProjectsActionTypes.SET_PROJECTS, count: count }); };
exports.setProjectCount = setProjectCount;
var toggleIsFetching = function (isFetching) {
    return ({ type: projects_1.ProjectsActionTypes.TOGGLE_IS_FETCHING, isFetching: isFetching });
};
exports.toggleIsFetching = toggleIsFetching;
var toggleIsFollowingProgress = function (isFetching, userId) {
    return ({ type: projects_1.ProjectsActionTypes.TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: isFetching, userId: userId });
};
exports.toggleIsFollowingProgress = toggleIsFollowingProgress;
// Thunks
var getProjects = function (pageSize, currentPage) {
    if (pageSize === void 0) { pageSize = 6; }
    if (currentPage === void 0) { currentPage = 1; }
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        var response, projectsArr, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    console.log("jsdjjd");
                    dispatch({ type: projects_1.ProjectsActionTypes.TOGGLE_IS_FETCHING, isFetching: true });
                    dispatch({ type: projects_1.ProjectsActionTypes.SET_CURRENT_PAGE, currentPage: currentPage });
                    return [4 /*yield*/, api_1.instance.get("projects?take=" + pageSize + "&skip=" + currentPage)];
                case 1:
                    response = _a.sent();
                    dispatch({ type: projects_1.ProjectsActionTypes.TOGGLE_IS_FETCHING, isFetching: false });
                    projectsArr = response.data;
                    console.log(response.data);
                    dispatch({ type: projects_1.ProjectsActionTypes.SET_PROJECTS, projects: projectsArr });
                    dispatch({ type: projects_1.ProjectsActionTypes.SET_TOTAL_COUNT, count: projectsArr.length });
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
exports.getProjects = getProjects;
//# sourceMappingURL=projects.js.map