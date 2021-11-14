import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import {authReducer} from "./authReducer";
import {projectsReducer} from "./projectsReducer";



export const rootReducer = combineReducers({
    auth: authReducer,
    form: formReducer,
    projects: projectsReducer,
});

export type RootState = ReturnType<typeof rootReducer> 