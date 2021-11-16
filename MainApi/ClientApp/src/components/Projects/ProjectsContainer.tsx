import * as React from 'react';
import {usedTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import Projects from "./Projects";
import {useEffect} from "react";

const ProjectsContainer = () => {

    let { projects, pageSize,  totalProjectsCount, currentPage, isFetching, isFollowingInProgress}
                                                = usedTypedSelector(state => state.projects);

    let { getProjects, setPage } = useActions();

    useEffect(() => {
        getProjects(pageSize, currentPage);
    }, [currentPage]);

    
    const onPageChanged = (pageNum: number) => {
        getProjects(pageSize, pageNum);
    }

    return (
        <div>
            <Projects projects={projects} pageSize={pageSize}
                      totalProjectsCount={totalProjectsCount}
                      currentPage={currentPage} isFetching={isFetching}
                      isFollowingInProgress={isFollowingInProgress}
                      onPageChanged={onPageChanged}/>
        </div>
    );
};

export default ProjectsContainer;