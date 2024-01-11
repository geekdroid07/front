const INIT_STATE = {
  allCharacters: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'ADD_FAV': {
      if (state.allCharacters.some((character) => character.id === action.payload.id)) {
        window.alert('Ya se encuentra en favoritos');
        return;
      }
      action.payload.isFav = true;
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload]
      }
    }
    case "REMOVE_FAV": {
      return {
        ...state,
        allCharacters: state.allCharacters.filter((character) => character.id !== action.payload)
      }
    }
    default:
      return state;
  }
}
