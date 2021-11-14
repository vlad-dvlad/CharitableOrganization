import * as React from 'react';
import {usedTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import Projects from "./Projects";

const ProjectsContainer = () => {

    let {projects, pageSize,  totalProjectsCount, currentPage, isFetching, isFollowingInProgress}
                                                = usedTypedSelector(state => state.projects);

    let { getProjects } = useActions();





    return (
        <div>
            <Projects projects={projects} pageSize={pageSize}
                      totalProjectsCount={totalProjectsCount}
                      currentPage={currentPage} isFetching={isFetching}
                      isFollowingInProgress={isFollowingInProgress}
                       getProjects={getProjects}/>
        </div>
    );
};

export default ProjectsContainer;