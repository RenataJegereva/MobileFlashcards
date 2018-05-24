export const FETCH_DECKS = 'FETCH_DECKS'

export function fetchDecks(decks) {
  return {
    type: FETCH_DECKS,
    decks
  }
}