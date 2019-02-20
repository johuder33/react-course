import {createStore, applyMiddleware} from "redux";
import Reducers from "./reducers";
import Logger from "redux-logger";
import {heroesService} from "./services/middleware/heroes"

export const configStore = () => {
    // aca se utilizan los middlewares creados
    const store = createStore(Reducers, applyMiddleware(heroesService, Logger));
    return store;
};
