import * as React from 'react';
import Paginator from "../Сommon/Paginator";
import Project from './Project';
const s = require("./project.module.scss");

export interface ProjectStateProps {
    projects: any[];
    pageSize: number;
    totalProjectsCount: number;
    currentPage: number;
    isFetching: boolean;
    isFollowingInProgress: []
}

export interface ProjectDispatchProps {
    onPageChanged: (p: number) => void;
}

const Projects : React.FC<ProjectStateProps & ProjectDispatchProps> = (props) => {

    const rows = [...Array(Math.ceil(props.projects.length / 3) )];
    const projectRows = rows.map((row, idx) => props.projects.slice(idx * 3, idx * 3 + 3));



/*    const content = projectRows.map((row, idx) => (
         <div className={s.projects__row} key={idx}>
             {row.map(project => <div className={s.projects__item} key={project}>
                 {project}
             </div>)}
         </div>
     ));*/


    const content = projectRows.map((row, idx) => (
        <div className={s.projects__row} key={idx}>
            {row.map(p => <div key={p} className={s.projects__item}>{<Project name={p.name}
                description={p.description}
                isCompleted={p.isCompleted} /> }</div> )}
        </div> )
    );



    return (
        <div className={`${s.projects} ${s.projects__container}`}>

            {/*<ProjectRow projects={props.projects} pageSize={props.pageSize}
                        totalProjectsCount={props.totalProjectsCount}
                        currentPage={props.currentPage} isFetching={props.isFetching}
                        isFollowingInProgress={props.isFollowingInProgress}/>*/}
            {/*<div className={s.projects__row}>
                {projects.map(p => <div key={p} className={s.projects__item}>{<Project name={p.name}
                    description={p.description}
                    status={p.status}  />}</div>)}
            </div>*/}
            { content }

            <Paginator totalProjectsCount={props.totalProjectsCount} pageSize={props.pageSize}
                currentPage={props.currentPage} onPageChanged={props.onPageChanged} />

            {/*<div className={s.projects__row}>*/}
            {/*    <div className={s.projects__item}>*/}
            {/*        <div className={s.project__container}>*/}
            {/*            <div className={s.project__image}>*/}
            {/*                <img src="https://cdn.pixabay.com/photo/2015/03/30/20/33/heart-700141__480.jpg" alt="Image not found!" />*/}
            {/*            </div>*/}
            {/*            <div className={s.project__name}>*/}
            {/*                <h2>Name</h2>*/}
            {/*            </div>*/}
            {/*            <div className={s.project__status}>*/}
            {/*                <h2>Status</h2>*/}
            {/*            </div>*/}
            {/*            <div className={s.project__btn}>*/}
            {/*                <button>Read More</button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={s.projects__item}>*/}
            {/*        <div className={s.project__container}>*/}
            {/*            <div className={s.project__image}>*/}
            {/*                <img src="https://cdn.pixabay.com/photo/2015/03/30/20/33/heart-700141__480.jpg" alt="Image not found!" />*/}
            {/*            </div>*/}
            {/*            <div className={s.project__name}>*/}
            {/*                <h2>Name</h2>*/}
            {/*            </div>*/}
            {/*            <div className={s.project__status}>*/}
            {/*                <h2>Status</h2>*/}
            {/*            </div>*/}
            {/*            <div className={s.project__btn}>*/}
            {/*                <button>Read More</button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={s.projects__item}>*/}
            {/*        <div className={s.project__container}>*/}
            {/*            <div className={s.project__image}>*/}
            {/*                <img src="https://cdn.pixabay.com/photo/2015/03/30/20/33/heart-700141__480.jpg" alt="Image not found!" />*/}
            {/*            </div>*/}
            {/*            <div className={s.project__name}>*/}
            {/*                <h2>Name</h2>*/}
            {/*            </div>*/}
            {/*            <div className={s.project__status}>*/}
            {/*                <h2>Status</h2>*/}
            {/*            </div>*/}
            {/*            <div className={s.project__btn}>*/}
            {/*                <button>Read More</button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={s.projects__row}>*/}
            {/*    <div className={s.projects__item}>*/}
            {/*        <div className={s.project__container}>*/}
            {/*            <div className={s.project__image}>*/}
            {/*                <img src="https://cdn.pixabay.com/photo/2015/03/30/20/33/heart-700141__480.jpg" alt="Image not found!" />*/}
            {/*            </div>*/}
            {/*            <div className={s.project__name}>*/}
            {/*                <h2>Name</h2>*/}
            {/*            </div>*/}
            {/*            <div className={s.project__status}>*/}
            {/*                <h2>Status</h2>*/}
            {/*            </div>*/}
            {/*            <div className={s.project__btn}>*/}
            {/*                <button>Read More</button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={s.projects__item}>*/}
            {/*        <div className={s.project__container}>*/}
            {/*            <div className={s.project__image}>*/}
            {/*                <img src="https://cdn.pixabay.com/photo/2015/03/30/20/33/heart-700141__480.jpg" alt="Image not found!" />*/}
            {/*            </div>*/}
            {/*            <div className={s.project__name}>*/}
            {/*                <h2>Name</h2>*/}
            {/*            </div>*/}
            {/*            <div className={s.project__status}>*/}
            {/*                <h2>Status</h2>*/}
            {/*            </div>*/}
            {/*            <div className={s.project__btn}>*/}
            {/*                <button>Read More</button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={s.projects__item}>*/}
            {/*        <div className={s.project__container}>*/}
            {/*            <div className={s.project__image}>*/}
            {/*                <img src="https://cdn.pixabay.com/photo/2015/03/30/20/33/heart-700141__480.jpg" alt="Image not found!" />*/}
            {/*            </div>*/}
            {/*            <div className={s.project__name}>*/}
            {/*                <h2>Name</h2>*/}
            {/*            </div>*/}
            {/*            <div className={s.project__status}>*/}
            {/*                <h2>Status</h2>*/}
            {/*            </div>*/}
            {/*            <div className={s.project__btn}>*/}
            {/*                <button>Read More</button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

export default Projects;