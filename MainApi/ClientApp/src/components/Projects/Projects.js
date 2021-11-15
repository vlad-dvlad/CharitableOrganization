"use strict";
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
var React = require("react");
var Paginator_1 = require("../\u0421ommon/Paginator");
var Project_1 = require("./Project");
var s = require("./project.module.scss");
var Projects = function (props) {
    var rows = __spreadArray([], Array(Math.ceil(props.projects.length / 3)), true);
    var projectRows = rows.map(function (row, idx) { return props.projects.slice(idx * 3, idx * 3 + 3); });
    /*    const content = projectRows.map((row, idx) => (
             <div className={s.projects__row} key={idx}>
                 {row.map(project => <div className={s.projects__item} key={project}>
                     {project}
                 </div>)}
             </div>
         ));*/
    var content = projectRows.map(function (row, idx) { return (React.createElement("div", { className: s.projects__row, key: idx }, row.map(function (p) { return React.createElement("div", { key: p, className: s.projects__item }, React.createElement(Project_1.default, { name: p.name, description: p.description, status: p.status })); }))); });
    var projects = props.projects;
    return (React.createElement("div", { className: s.projects + " " + s.projects__container },
        content,
        React.createElement(Paginator_1.default, { totalProjectsCount: props.totalProjectsCount, pageSize: props.pageSize, currentPage: props.currentPage, setPage: props.setPage })));
};
exports.default = Projects;
//# sourceMappingURL=Projects.js.map