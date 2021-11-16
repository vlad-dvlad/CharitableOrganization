import { stat } from 'fs';
import * as React from 'react';
const s = require("./project.module.scss");

interface ProjectStateProps {
    name: string
    description: string;
    isCompleted: boolean;
}

const Project: React.FC<ProjectStateProps> = (props) => {

    const { name, description, isCompleted } = props;

    console.log(isCompleted);

    return (
        <div className={s.projects__item} >
            <div className={s.project__container}>
                <div className={s.project__image}>
                    <img src="https://ollmlb.org/wp-content/uploads/goodness.jpg"
                        alt="Image not found!" />
                </div>
                <div className={s.project__name}>
                    <h2>{ name }</h2>
                </div>
                <div className={s.project__status}>
                    <h2>
                        {
                            !isCompleted && "Активний проект"
                        }
                        {
                            isCompleted && "Завершений проект"
                        }
                    </h2>
                </div>
                <div className={s.project__btn}>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    );
};



export default Project;