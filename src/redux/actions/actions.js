
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
  

export const filterCards = (state, payload) => {
    return {
        ...state,
        formulario: payload,
    };
};

export const orderCards = (state, payload) => {
    return {
        ...state,
        order: payload,
    };
}

