import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import { categoryReducer } from "./categoryReducer";


export const rootReducer= combineReducers({
    postReducer:postReducer,
    categoryReducer:categoryReducer
})