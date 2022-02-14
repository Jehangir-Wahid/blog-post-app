import { AuthorActionTypes, GeneralActionTypes, PostActionTypes } from "../action-types";
import { AuthorType, MessageType, PostType } from "../types";

interface GetAuthor {
    type: AuthorActionTypes.GET_AUTHOR,
    payload: AuthorType,
}

interface GetAllAuthors {
    type: AuthorActionTypes.GET_ALL_AUTHORS,
    payload: AuthorType[],
}

interface GetPost {
    type: PostActionTypes.GET_POST,
    payload: PostType,
}

interface GetAllPosts {
    type: PostActionTypes.GET_ALL_POSTS,
    payload: PostType[],
}

interface GetSelfPosts {
    type: PostActionTypes.GET_SELF_POSTS,
    payload: PostType[],
}

interface GetAuthorPosts {
    type: PostActionTypes.GET_AUTHOR_POSTS,
    payload: PostType[],
}

interface GetLikedPosts {
    type: PostActionTypes.LIKED_POSTS,
    payload: PostType[],
}

interface SetIsLoading {
    type: GeneralActionTypes.SET_IS_LOADING,
    payload: boolean,
}

interface SetMessage {
    type: GeneralActionTypes.SET_MESSAGE,
    payload: MessageType,
}

interface ResetMessage {
    type: GeneralActionTypes.RESET_MESSAGE,
}

interface Reset {
    type: GeneralActionTypes.RESET,
}

export type Action = GetAuthor
    | GetAllAuthors
    | GetPost
    | GetAllPosts
    | GetSelfPosts
    | GetAuthorPosts
    | GetLikedPosts
    | SetIsLoading
    | SetMessage
    | ResetMessage
    | Reset