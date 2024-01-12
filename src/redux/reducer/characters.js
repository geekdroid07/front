const INIT_STATE = {
  allCharacters: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'ADD_FAV': {
      const index = state.allCharacters.findIndex((character) => character.id === action.payload);
      state.allCharacters[index].isFav = true;
      return {
        ...state,
        allCharacters: state.allCharacters
      }
    }
    case "REMOVE_FAV": {
      const index = state.allCharacters.findIndex((character) => character.id === action.payload);
      state.allCharacters[index].isFav = false;
      return {
        ...state,
        allCharacters: state.allCharacters
      }
    }
    case "ADD_CHARACTER": {
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload]
      }
    }
    case "REMOVE_CHARACTER": {
      return {
        ...state,
        allCharacters: state.allCharacters.filter((character) => character.id !== action.payload)
      }
    }
    default:
      return state;
  }
}
