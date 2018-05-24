import { AsyncStorage } from 'react-native'
const STORAGE_KEY = 'flashcards:decks'

//getDecks
export function getDecks() {
  return AsyncStorage.getItem(STORAGE_KEY, (err, result) => {
    if (result === null) {
      return { decks: {} };
    }
    return JSON.parse(result);
  });
}

//getDeck


//saveDeckTitle


//addCardToDeck