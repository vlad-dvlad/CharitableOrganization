import * as React from 'react';
const s = require("./project.module.scss");

interface ProjectStateProps {
    projects: [];
    pageSize: number;
    totalProjectsCount: number;
    currentPage: number;
    isFetching: boolean;
    isFollowingInProgress: []
}
interface ProjectDispatchProps {
    getProjects: (pS: number, cP: number) => void;
}

const Projects : React.FC<ProjectStateProps & ProjectDispatchProps> = (props) => {

    const rows = [...Array(Math.ceil(props.projects.length / 4))];
    const projectRow = rows.map((row, idx) => props.projects.slice(idx * 4, idx * 4 + 4));


    return (
        <div className={`${s.projects} ${s.projects__container}`}>
            <div className={s.projects__row}>
                <div className={s.projects__item}>
                    <div className={s.project__container}>
                        <div className={s.project__image}>
                            <img src="https://cdn.pixabay.com/photo/2015/03/30/20/33/heart-700141__480.jpg" alt="Image not found!" />
                        </div>
                        <div className={s.project__name}>
                            <h2>Name</h2>
                        </div>
                        <div className={s.project__status}>
                            <h2>Status</h2>
                        </div>
                        <div className={s.project__btn}>
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
                <div className={s.projects__item}>
                    <div className={s.project__container}>
                        <div className={s.project__image}>
                            <img src="https://cdn.pixabay.com/photo/2015/03/30/20/33/heart-700141__480.jpg" alt="Image not found!" />
                        </div>
                        <div className={s.project__name}>
                            <h2>Name</h2>
                        </div>
                        <div className={s.project__status}>
                            <h2>Status</h2>
                        </div>
                        <div className={s.project__btn}>
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
                <div className={s.projects__item}>
                    <div className={s.project__container}>
                        <div className={s.project__image}>
                            <img src="https://cdn.pixabay.com/photo/2015/03/30/20/33/heart-700141__480.jpg" alt="Image not found!" />
                        </div>
                        <div className={s.project__name}>
                            <h2>Name</h2>
                        </div>
                        <div className={s.project__status}>
                            <h2>Status</h2>
                        </div>
                        <div className={s.project__btn}>
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.projects__row}>
                <div className={s.projects__item}>
                    <div className={s.project__container}>
                        <div className={s.project__image}>
                            <img src="https://cdn.pixabay.com/photo/2015/03/30/20/33/heart-700141__480.jpg" alt="Image not found!" />
                        </div>
                        <div className={s.project__name}>
                            <h2>Name</h2>
                        </div>
                        <div className={s.project__status}>
                            <h2>Status</h2>
                        </div>
                        <div className={s.project__btn}>
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
                <div className={s.projects__item}>
                    <div className={s.project__container}>
                        <div className={s.project__image}>
                            <img src="https://cdn.pixabay.com/photo/2015/03/30/20/33/heart-700141__480.jpg" alt="Image not found!" />
                        </div>
                        <div className={s.project__name}>
                            <h2>Name</h2>
                        </div>
                        <div className={s.project__status}>
                            <h2>Status</h2>
                        </div>
                        <div className={s.project__btn}>
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
                <div className={s.projects__item}>
                    <div className={s.project__container}>
                        <div className={s.project__image}>
                            <img src="https://cdn.pixabay.com/photo/2015/03/30/20/33/heart-700141__480.jpg" alt="Image not found!" />
                        </div>
                        <div className={s.project__name}>
                            <h2>Name</h2>
                        </div>
                        <div className={s.project__status}>
                            <h2>Status</h2>
                        </div>
                        <div className={s.project__btn}>
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;