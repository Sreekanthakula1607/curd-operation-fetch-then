import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "..";
import { thunk } from "redux-thunk";

export const MyStore= createStore(rootReducer,applyMiddleware(thunk))