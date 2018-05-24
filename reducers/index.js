import { FETCH_DECKS } from '../actions'

const initialState = {
  decks: {}
}

function flashcards(state = initialState, action) {
  switch (action.type) {
    case FETCH_DECKS:
      return {
        ...state,
        decks: action.decks
      };
    default:
      return state
  }
}

export default flashcards
