import {ProjectsAction, ProjectsActionTypes, ProjectsState} from "../../types/projects/projects";

const initialState : ProjectsState = {
    projects: [],
    pageSize: 6,
    totalProjectsCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: [],
}


export const projectsReducer = (state = initialState, action: ProjectsAction) : ProjectsState => {
    switch(action.type){
        case ProjectsActionTypes.FOLLOW:
            return { ...state, /* smt else*/ };
        case ProjectsActionTypes.UNFOLLOW:
            return { ...state, /* smt else*/ };
        case ProjectsActionTypes.TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case ProjectsActionTypes.SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case ProjectsActionTypes.SET_PROJECTS:
            return { ...state, projects: [...action.projects] };
        case ProjectsActionTypes.SET_TOTAL_COUNT:
            return {...state, totalProjectsCount: action.count};

        default: return state;
    }
}
