import {getHeroeAPI} from "./getheroesAPI";
import {GET_HEROES} from "../../../../constants";

// creamos un mapa de funciones

const apiHandlers = {
    [GET_HEROES] : getHeroeAPI,
    UNKNOWN:(next, action) => next(action)
    
};

export const executeHandler = (type)=> apiHandlers[type] || apiHandlers.UNKNOWN;