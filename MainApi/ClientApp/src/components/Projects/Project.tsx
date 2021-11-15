import { stat } from 'fs';
import * as React from 'react';
const s = require("./project.module.scss");

interface ProjectStateProps {
    name: string
    description: string;
    status: boolean;
}

const Project: React.FC<ProjectStateProps> = (props) => {

    const { name, description, status } = props;

    return (
        <div className={s.projects__item} >
            <div className={s.project__container}>
                <div className={s.project__image}>
                    <img src="https://cdn.pixabay.com/photo/2015/03/30/20/33/heart-700141__480.jpg"
                        alt="Image not found!" />
                </div>
                <div className={s.project__name}>
                    <h2>{ name }</h2>
                </div>
                <div className={s.project__status}>
                    <h2>Status: { status }</h2>
                </div>
                <div className={s.project__btn}>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    );
};



export default Project;