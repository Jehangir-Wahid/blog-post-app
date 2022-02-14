export enum AuthorActionTypes {
    GET_AUTHOR = "GET_AUTHOR",
    GET_ALL_AUTHORS = "GET_ALL_AUTHORS",
}

export enum PostActionTypes {
    GET_POST = "GET_POST",
    GET_ALL_POSTS = "GET_ALL_POSTS",
    GET_SELF_POSTS = "GET_SELF_POSTS",
    GET_AUTHOR_POSTS = "GET_AUTHOR_POSTS",
    LIKED_POSTS = "LIKED_POSTS",
}

export enum GeneralActionTypes {
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_MESSAGE = "SET_MESSAGE",
    RESET_MESSAGE = "RESET_MESSAGE",
    RESET = "RESET",
}
