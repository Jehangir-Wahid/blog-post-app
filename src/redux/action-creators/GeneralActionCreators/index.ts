import { GeneralActionTypes } from "../../action-types";
import { Dispatch } from "redux";
import { Action } from "../../actions";
import { MessageType } from "../../types";

export const setIsLoading = (isLoading: boolean) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: GeneralActionTypes.SET_IS_LOADING,
            payload: isLoading,
        });
    };
};

export const setMessage = (message: MessageType) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: GeneralActionTypes.SET_MESSAGE,
            payload: message,
        });
    };
};

export const resetMessage = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: GeneralActionTypes.RESET_MESSAGE,
        })
    }
}

export const reset = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: GeneralActionTypes.RESET,
        })
    }
}