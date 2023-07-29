//external import
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
//internal import
import todosReducer from "./src/services/reducers/todosReducer";

const store = createStore(todosReducer, applyMiddleware(thunk));

export default store;
