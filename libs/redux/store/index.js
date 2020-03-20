import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const initializeStore = (initialState = {}) =>
    createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware())
    );

export default initializeStore;