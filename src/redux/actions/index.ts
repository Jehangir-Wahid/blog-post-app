import { ActionTypes } from "../action-types"

interface SetIsLoading {
    type: ActionTypes.SET_IS_LOADING,
    payload: boolean,
}

export type Action = SetIsLoading