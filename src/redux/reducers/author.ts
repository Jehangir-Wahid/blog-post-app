import { AuthorType, AuthorsType } from "../types";
import { authorInitialState, authorsInitialState } from "../initial-states";
import { Action } from "../actions";
import { AuthorActionTypes } from "../action-types";

export const authorsReducer = (state: any = authorsInitialState, action: Action) => {
    switch (action.type) {
        case AuthorActionTypes.GET_ALL_AUTHORS:
            return { ...state, data: action.payload }
        default:
            return state;
    }
}

export const authorReducer = (state: any = authorInitialState, action: Action) => {
    switch (action.type) {
        case AuthorActionTypes.GET_AUTHOR:
            return { ...state, data: action.payload }
        default:
            return state;
    }
}