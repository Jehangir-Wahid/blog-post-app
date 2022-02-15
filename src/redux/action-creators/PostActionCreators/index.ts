import { GeneralActionTypes, PostActionTypes } from "../../action-types";
import { Dispatch } from "redux";
import { Action } from "../../actions";
import { LikePostType, PostType } from "../../types";
import PostService from "../../../services/PostService";

export const createPost = (post: FormData) => {
    return (dispatch: Dispatch<Action>) => {
        PostService.post("create-post", post)
        .then(async response => {
            await dispatch({
                type: GeneralActionTypes.SET_MESSAGE,
                payload: { text: response.data.message, level: "success" },
            });
        })
        .catch(async error => {
            await dispatch({
                type: GeneralActionTypes.SET_MESSAGE,
                payload: { text: error.response.data.message, level: "danger" },
            });
        })
        .finally(async () => {
            await dispatch({
                type: GeneralActionTypes.SET_IS_LOADING,
                payload: false,
            });
        })
    };
};

export const getPost = (postId: any) => {
    return async (dispatch: Dispatch<Action>) => {
        await dispatch({
            type: GeneralActionTypes.SET_IS_LOADING,
            payload: true,
        });
        PostService.get(`${postId}`)
        .then(async response => {
            const post: PostType = response.data
            await dispatch({
                type: PostActionTypes.GET_POST,
                payload: post,
            });
        })
        .catch(async error => {
            await dispatch({
                type: GeneralActionTypes.SET_MESSAGE,
                payload: { text: error.response.data.message, level: "danger" },
            });
        })
        .finally(async () => {
            await dispatch({
                type: GeneralActionTypes.SET_IS_LOADING,
                payload: false,
            });
        })
    }
}

export const getAllPosts = () => {
    return async (dispatch: Dispatch<Action>) => {
        await dispatch({
            type: GeneralActionTypes.SET_IS_LOADING,
            payload: true,
        });
        PostService.get("all")
        .then(async response => {
            const posts: PostType[] = response.data
            await dispatch({
                type: PostActionTypes.GET_ALL_POSTS,
                payload: posts,
            });
        })
        .catch(async error => {
            await dispatch({
                type: GeneralActionTypes.SET_MESSAGE,
                payload: { text: error.response.data.message, level: "danger" },
            });
        })
        .finally(async () => {
            await dispatch({
                type: GeneralActionTypes.SET_IS_LOADING,
                payload: false,
            });
        })
    }
}

export const updatePost = (post: PostType) => {
    return (dispatch: Dispatch<Action>) => {
        PostService.post("update-post", post)
        .then(async response => {
            await dispatch({
                type: GeneralActionTypes.SET_MESSAGE,
                payload: { text: response.data.message, level: "success" },
            });
        })
        .catch(async error => {
            await dispatch({
                type: GeneralActionTypes.SET_MESSAGE,
                payload: { text: error.response.data.message, level: "danger" },
            });
        })
        .finally(async () => {
            await dispatch({
                type: GeneralActionTypes.SET_IS_LOADING,
                payload: false,
            });
        })
    }
}

export const deletePost = (postId: string) => {
    return (dispatch: Dispatch<Action>) => {
        PostService.delete(`delete/${postId}`)
        .then(async response => {
            await dispatch({
                type: GeneralActionTypes.SET_MESSAGE,
                payload: { text: response.data.message, level: "success" },
            });
        })
        .catch(async error => {
            await dispatch({
                type: GeneralActionTypes.SET_MESSAGE,
                payload: { text: error.response.data.message, level: "danger" },
            });
        })
        .finally(async () => {
            await dispatch({
                type: GeneralActionTypes.SET_IS_LOADING,
                payload: false,
            });
        })
    }
}

export const getSelfPosts = () => {
    return async (dispatch: Dispatch<Action>) => {
        await dispatch({
            type: GeneralActionTypes.SET_IS_LOADING,
            payload: true,
        });
        PostService.get("self-posts")
        .then(async response => {
            const posts: PostType[] = response.data
            await dispatch({
                type: PostActionTypes.GET_SELF_POSTS,
                payload: posts,
            });
        })
        .catch(async error => {
            await dispatch({
                type: GeneralActionTypes.SET_MESSAGE,
                payload: { text: error.response.data.message, level: "warning" },
            });
        })
        .finally(async () => {
            await dispatch({
                type: GeneralActionTypes.SET_IS_LOADING,
                payload: false,
            });
        })
    }
}

export const getAuthorPosts = (authorId: any) => {
    return async (dispatch: Dispatch<Action>) => {
        await dispatch({
            type: GeneralActionTypes.SET_IS_LOADING,
            payload: true,
        });
        PostService.get(`user-posts/${authorId}`)
        .then(async response => {
            const posts: PostType[] = response.data
            await dispatch({
                type: PostActionTypes.GET_AUTHOR_POSTS,
                payload: posts,
            });
        })
        .catch(async error => {
            await dispatch({
                type: GeneralActionTypes.SET_MESSAGE,
                payload: { text: error.response.data.message, level: "warning" },
            });
        })
        .finally(async () => {
            await dispatch({
                type: GeneralActionTypes.SET_IS_LOADING,
                payload: false,
            });
        })
    }
}

export const likedPosts = (authorId: any) => {
    return async (dispatch: Dispatch<Action>) => {
        await dispatch({
            type: GeneralActionTypes.SET_IS_LOADING,
            payload: true,
        });
        PostService.get(`liked-posts/${authorId}`)
        .then(async response => {
            const posts: PostType[] = response.data
            await dispatch({
                type: PostActionTypes.LIKED_POSTS,
                payload: posts,
            });
        })
        .catch(async error => {
            await dispatch({
                type: GeneralActionTypes.SET_MESSAGE,
                payload: {
                    text: error.response.data.message,
                    level: "warning",
                },
            });
        })
        .finally(async () => {
            await dispatch({
                type: GeneralActionTypes.SET_IS_LOADING,
                payload: false,
            });
        })
    }
}

export const likePost = (post: LikePostType) => {
    return (dispatch: Dispatch<Action>) => {
        PostService.post("like-post", post)
        .then(async response => {
            // Set something in Async Storage to view the post as liked or unliked
            await dispatch({
                type: GeneralActionTypes.SET_MESSAGE,
                payload: { text: response.data.message, level: "success" },
            });
        })
        .catch(async error => {
            await dispatch({
                type: GeneralActionTypes.SET_MESSAGE,
                payload: { text: error.response.data.message, level: "warning" },
            });
        })
        .finally(async () => {
            await dispatch({
                type: GeneralActionTypes.SET_IS_LOADING,
                payload: false,
            });
        })
    }
}
