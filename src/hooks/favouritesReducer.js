export const initialState = {
  favourites: [],
}

export function favouritesReducer(state, action) {
  switch (action.type) {
    case 'LOAD_FAVOURITES':
      return { ...state, favourites: action.payload }

    case 'TOGGLE_FAVOURITE': {
      const exists = state.favourites.find((p) => p.id === action.payload.id)
      const updated = exists
        ? state.favourites.filter((p) => p.id !== action.payload.id)
        : [...state.favourites, action.payload]

      localStorage.setItem('pmh_favourites', JSON.stringify(updated))
      return { ...state, favourites: updated }
    }

    default:
      return state
  }
}
