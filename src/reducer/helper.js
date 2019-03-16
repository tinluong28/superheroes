import characters_json from "../data/characters.json";
// Helper function to get character by ID
export const createCharacter = id => {
  let character = characters_json.find(c => c.id === id);
  return character;
};
