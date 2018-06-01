import {  FETCH_DECKS,
          ADD_DECK } from '../actions'

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
    case ADD_DECK:
      return {
        ...state,
        decks: {
          ...state.decks,
          [(action.title).toLowerCase()]: {
            title: action.title,
            questions: []
          }
        }
      };
    default:
      return state
  }
}

export default flashcards
