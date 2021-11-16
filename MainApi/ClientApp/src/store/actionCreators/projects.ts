import {ProjectsAction, ProjectsActionTypes} from '../../types/projects/projects';
import {Dispatch} from "redux";
import { instance } from "../../api/api";

interface ProjectsArray {
    projects: [
        /*{
            name: string,
            description: string,
            isCompleted: boolean,
            id: number,
        }*/
    ]
}

export const follow = (userId: number) => ({type: ProjectsActionTypes.FOLLOW, userId})

export const unfollow = (userId: number) => ({type: ProjectsActionTypes.UNFOLLOW, userId})

export const setPage = (currentPage: number) => ({type: ProjectsActionTypes.SET_CURRENT_PAGE, currentPage})

export const setProject = (project: {}) => ({type: ProjectsActionTypes.SET_PROJECTS, project})

export const setProjectCount = (count: number) => ({type: ProjectsActionTypes.SET_PROJECTS, count})

export const toggleIsFetching = (isFetching : boolean) =>
    ({type: ProjectsActionTypes.TOGGLE_IS_FETCHING, isFetching: isFetching})

export const toggleIsFollowingProgress = (isFetching : boolean, userId : number) =>
    ({type: ProjectsActionTypes.TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

// Thunks
export const getProjects = (pageSize: number, currentPage: number) => async (dispatch: Dispatch<ProjectsAction>) => {
    try {
        dispatch({ type: ProjectsActionTypes.TOGGLE_IS_FETCHING, isFetching: true });
        dispatch({ type: ProjectsActionTypes.SET_CURRENT_PAGE, currentPage });

        let response = await instance.get(`projects?pageSize=${pageSize}&page=${currentPage}`);

        dispatch({ type: ProjectsActionTypes.TOGGLE_IS_FETCHING, isFetching: false });

        let projectsArr: any[] = response.data.projects;
        console.log(response.data);
        let totalCount = response.data.totalCount;

        dispatch({ type: ProjectsActionTypes.SET_PROJECTS, projects: projectsArr });
        dispatch({ type: ProjectsActionTypes.SET_TOTAL_COUNT, count: totalCount });
    } catch (e) {

    }

}