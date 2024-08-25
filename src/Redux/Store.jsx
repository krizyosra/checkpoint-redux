import {  todoReducer } from "./Reducers/Reducer";
import { createStore } from "redux";
export const store=createStore(todoReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())