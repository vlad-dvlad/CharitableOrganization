export interface ProjectsState {
    projects : any[];
    pageSize: number;
    totalProjectsCount: number;
    currentPage: number;
    isFetching: boolean;
    isFollowingInProgress : [];
}

export enum ProjectsActionTypes {
    FOLLOW = "MainApi/projects/FOLLOW",
    UNFOLLOW = "MainApi/projects/FOLLOW",
    SET_PROJECTS = "MainApi/projects/SET_PROJECTS",
    SET_CURRENT_PAGE = "MainApi/projects/SET_CURRENT_PAGE",
    SET_TOTAL_COUNT = "MainApi/projects/SET_TOTAL_COUNT",
    TOGGLE_IS_FETCHING = 'MainApi/projects/TOGGLE_IS_FETCHING',
    TOGGLE_IS_FOLLOWING_PROGRESS = 'MainApi/projects/TOGGLE_IS_FOLLOWING_PROGRESS'
}

interface FollowAction {
    type: ProjectsActionTypes.FOLLOW;
    projectId: boolean;
}

interface UnfollowAction {
    type: ProjectsActionTypes.UNFOLLOW;
    projectId: boolean;
}

interface ToggleIsFetching {
    type: ProjectsActionTypes.TOGGLE_IS_FETCHING;
    isFetching: boolean;
}

interface ToggleIsFollowingProgress {
    type: ProjectsActionTypes.TOGGLE_IS_FOLLOWING_PROGRESS;
    isFetching: boolean;
    projectId: boolean
}

interface SetCurrentPage {
    type: ProjectsActionTypes.SET_CURRENT_PAGE;
    currentPage: number;
}

interface SetProjects {
    type: ProjectsActionTypes.SET_PROJECTS;
    projects: any[];
}

interface SetProjectsCount {
    type: ProjectsActionTypes.SET_TOTAL_COUNT;
    count: number;
}

export type ProjectsAction = FollowAction | UnfollowAction
    | ToggleIsFetching | ToggleIsFollowingProgress
    | SetCurrentPage | SetProjects | SetProjectsCount;



