import {createStore, applyMiddleware} from "redux";
import Reducers from "./reducers";
import Logger from "redux-logger";

export const configStore = () => {
    const store = createStore(Reducers, applyMiddleware(Logger));
    return store;
};
