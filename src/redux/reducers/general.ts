import {Action} from "../actions";
import { GeneralActionTypes } from "../action-types";

export default (state: any = true, action: Action) => {
    switch (action.type) {
        case GeneralActionTypes.SET_IS_LOADING:
            return { ...state, isLoading: action.payload }
        case GeneralActionTypes.SET_MESSAGE:
            return { ...state, message: action.payload }
        case GeneralActionTypes.RESET_MESSAGE:
            return { ...state, message: null }
        case GeneralActionTypes.RESET:
            return { ...state, message: null, data: null }
        default:
            return state;
    }
}
