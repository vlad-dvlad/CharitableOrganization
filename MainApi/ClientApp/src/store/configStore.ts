import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

export const stroe = createStore({}, applyMiddleware(thunk));