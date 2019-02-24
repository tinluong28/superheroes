import characters_json from "../data/characters.json";
import { createCharacter } from "./helper";
import { ADD_CHARACTER, REMOVE_CHARACTER } from "../actions";

const characters = (state = characters_json, action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      let characters = state.filter(item => item.id !== action.id);
      return characters;
    case REMOVE_CHARACTER:
      state.splice(action.id, 0, createCharacter(action.id));
      characters = [...state];
      return characters;
    default:
      return state;
  }
};

export default characters;
