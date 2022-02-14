import { PostsType, PostType } from "../types";
import { postInitialState, postsInitialState } from "../initial-states";
import { Action } from "../actions";
import { PostActionTypes } from "../action-types";

export const postsReducer = (state: any = postsInitialState, action: Action) => {
    switch (action.type) {
        case PostActionTypes.GET_ALL_POSTS:
            return { ...state, data: action.payload }
        case PostActionTypes.GET_SELF_POSTS:
            return { ...state, data: action.payload }
        case PostActionTypes.GET_AUTHOR_POSTS:
            return { ...state, data: action.payload }
        case PostActionTypes.LIKED_POSTS:
            return { ...state, data: action.payload }
        default:
            return state;
    }
}

export const postReducer = (state: any = postInitialState, action: Action) => {
    switch (action.type) {
        case PostActionTypes.GET_POST:
            return { ...state, data: action.payload }
        default:
            return state;
    }
}
