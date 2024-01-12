export const addFav = (payload) => {
    return {
      type: "ADD_FAV",
      payload
    }
};

export const removeFav = (payload) => {
    return {
      type: "REMOVE_FAV",
      payload
    }
};

export const addCharacter = (payload) => {
    return {
      type: "ADD_CHARACTER",
      payload
    }
}

export const removeCharacter = (payload) => {
    return {
      type: "REMOVE_CHARACTER",
      payload
    }
}