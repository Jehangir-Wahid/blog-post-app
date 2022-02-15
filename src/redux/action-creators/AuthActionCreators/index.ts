import { GeneralActionTypes } from "../../action-types";
import { Dispatch } from "redux";
import { Action } from "../../actions";
import { AuthorType } from "../../types";
import AuthService from "../../../services/AuthService"

export const signUp = (author: AuthorType) => {
    return (dispatch: Dispatch<Action>) => {
        AuthService.post("signup", author.data)
        .then(async response => {
            console.log(response.data)
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("author", response.data.author)
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

export const signIn = (author: AuthorType) => {
    return async (dispatch: Dispatch<Action>) => {
        await dispatch({ type: GeneralActionTypes.SET_IS_LOADING, payload: true })
        AuthService.post("signin", { username: author.data.username, password: author.data.password })
        .then(async response => {
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("authorId", response.data.authorId)
            localStorage.setItem("author_avatar", response.data.author_avatar)
            localStorage.setItem("name", response.data.name)
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
        });
    };
};

export const signOut = () => {
    return (dispatch: Dispatch<Action>) => {
        AuthService.get("signout")
        .then(async response => {
            localStorage.clear()
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
        });
    };
};

export const updatePassword = (password: string) => {
    return (dispatch: Dispatch<Action>) => {
        AuthService.post("update-author", password)
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