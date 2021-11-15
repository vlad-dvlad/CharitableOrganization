import * as React from 'react';
import {ProjectDispatchProps, ProjectStateProps} from "./Projects";
import Project from "./Project";

const s = require("./project.module.scss");

const ProjectRow: React.FC<ProjectStateProps> = (props) => {

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

    return (
        <div className={s.projects__row}>
            {props.projects.map(project => <div key={project} className={s.projects__item}>{<Project name={project.name}
                description={project.description}
                status={project.status} projectId={project.id} />}</div>)}
        </div>
    );
};

export default ProjectRow;