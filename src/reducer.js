export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'addFavorite': {
      return state.map((u) => {
        if (u.id === action.id) {
          return {...u, isFavorite: true};
        } else {
          return u;
        }
      });
    }
    case 'removeFavorite': {
      return state.map((u) => {
        if (u.id === action.id) {
          return {...u, isFavorite: false};
        } else {
          return u;
        }
      });
    }
    case 'getFavorites': {
      return state.filter(user => user.isFavorite)
    }
    case 'getContacts': {
      return state.filter(user => !user.isFavorite)
    }
  }
  throw Error('Unknown action: ' + action.type);
}
