import { Action, applyMiddleware, compose, createStore } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { rootReducer } from "./reducers/configReducers";


export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export type ThunkAction<
    R, // Return type of the thunk function
    S, // state type used by getState
    E, // any "extra argument" injected into the thunk
    A extends Action // known types of actions that can be dispatched
    > = (dispatch: ThunkDispatch<S, E, A>, getState: () => S, extraArgument: E) => R
