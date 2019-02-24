import { combineReducers } from "redux";
import characters from "./characters";
import heroes from "./heroes";

const rootReducers = combineReducers({
  characters,
  heroes
});

export default rootReducers;
