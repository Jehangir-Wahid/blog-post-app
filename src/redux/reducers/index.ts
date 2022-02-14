import { combineReducers } from "redux";
import { authorsReducer, authorReducer } from "./author"
import generalReducer from "./general";
import { postsReducer, postReducer } from "./post";

const reducers = combineReducers({
    authorsReducer,
    authorReducer,
    generalReducer,
    postsReducer,
    postReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;