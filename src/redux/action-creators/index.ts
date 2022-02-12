import { ActionTypes } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";

export const setIsLoading = (isLoading: boolean) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.SET_IS_LOADING,
            payload: isLoading,
        });
    };
};
