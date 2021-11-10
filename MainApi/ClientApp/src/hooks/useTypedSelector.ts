import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers/configReducers";

export const usedTypedSelector : TypedUseSelectorHook<RootState> = useSelector;
 