import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as AuthActionCreators from "../store/actionCreators/auth";


export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(AuthActionCreators, dispatch);
} 