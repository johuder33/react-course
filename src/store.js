import {createStore, applyMiddleware} from "redux";
import Reducers from "./reducers";
import Logger from "redux-logger";
import {heroesService} from "./services/middleware/heroes";
import thunk from "redux-thunk"

export const configStore = () => {
    // aca se utilizan los middlewares creados
    const store = createStore(Reducers, applyMiddleware(Logger, thunk));
    // const store = createStore(Reducers, applyMiddleware(heroesService, Logger, thunk));
    return store;
};
