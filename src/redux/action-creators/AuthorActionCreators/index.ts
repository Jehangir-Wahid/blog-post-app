import { AuthorActionTypes, GeneralActionTypes } from "../../action-types";
import { Dispatch } from "redux";
import { Action } from "../../actions";
import { AuthorType } from "../../types";
import AuthorService from "../../../services/AuthorService"

export const getAuthor = (authorId: any) => {
    return async (dispatch: Dispatch<Action>) => {
        await dispatch({
            type: GeneralActionTypes.SET_IS_LOADING,
            payload: true,
        });
        AuthorService.get(`${authorId}`)
        .then(async response => {
            const author: AuthorType = response.data
            await dispatch({
                type: AuthorActionTypes.GET_AUTHOR,
                payload: author,
            });
        })
        .catch(async error => {
            console.log(error.response.data.message)
        })
        .finally(async () => {
            await dispatch({
                type: GeneralActionTypes.SET_IS_LOADING,
                payload: false,
            });
        })
    };
};

export const getAllAuthors = () => {
    return async (dispatch: Dispatch<Action>) => {
        await dispatch({
            type: GeneralActionTypes.SET_IS_LOADING,
            payload: true,
        });
        AuthorService.get("all")
        .then(async response => {
            const authors: AuthorType[] = response.data
            await dispatch({
                type: AuthorActionTypes.GET_ALL_AUTHORS,
                payload: authors,
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

export const updateAuthor = (author: AuthorType) => {
    return (dispatch: Dispatch<Action>) => {
        AuthorService.post("update-author", author)
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

export const deleteAuthor = () => {
    return (dispatch: Dispatch<Action>) => {
        AuthorService.delete("delete")
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

export const deleteAuthorById = (authorId: string) => {
    return (dispatch: Dispatch<Action>) => {
        AuthorService.delete(`delete/${authorId}`)
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
