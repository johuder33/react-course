import { combineReducers } from "redux";
import Heroes from "./hero";
const Reducers = combineReducers({
    heroes: Heroes
});

export default Reducers;