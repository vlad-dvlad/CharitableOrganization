"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Project_1 = require("./Project");
var s = require("./project.module.scss");
var ProjectRow = function (props) {
    /*    const rows = [...Array(Math.ceil(props.projects.length  / 3) )];
        const projectRows = rows.map((row, idx) => props.projects.slice(idx * 3, idx * 3 + 3));*/
    // const content = projectRows.map((row, idx) => (
    //     <div className={s.projects__row} key={idx}>
    //         {row.map(project => <div className={s.projects__item} key={project}>
    //             {project}
    //         </div>)}
    //     </div>
    // ));
    /*
    
    
        const content = projectRows.map((row, idx) => (
            <div className={s.projects__row} key={idx}>
                {row.map(project => <div key={project} className={s.projects__item}>{<Project name={project.name}
                                                                                              description={project.description}
                                                                                              status={project.status} projectId={project.id}/>}</div>)}
            </div> )
        );*/
    return (React.createElement("div", { className: s.projects__row }, props.projects.map(function (project) { return React.createElement("div", { key: project, className: s.projects__item }, React.createElement(Project_1.default, { name: project.name, description: project.description, status: project.status, projectId: project.id })); })));
};
exports.default = ProjectRow;
//# sourceMappingURL=ProjectRow.js.map