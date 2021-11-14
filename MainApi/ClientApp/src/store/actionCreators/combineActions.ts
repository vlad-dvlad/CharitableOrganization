import * as AuthActionCreators from "./auth";
import * as ProjectsActionCreators from "./projects";

export default {
    ...AuthActionCreators,
    ...ProjectsActionCreators,
}