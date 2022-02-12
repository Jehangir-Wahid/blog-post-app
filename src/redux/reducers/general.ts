import {Action} from "../actions";
import {ActionTypes} from "../action-types";

export default (state: any = true, action: Action) => {
    switch (action.type) {
        case ActionTypes.SET_IS_LOADING:
            return { ...state, isLoading: action.payload }
        default:
            return state;
    }
}