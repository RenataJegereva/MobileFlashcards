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
export const getDeck = deckId => {
  return AsyncStorage.getItem(STORAGE_KEY).then(result => {
    const decks = JSON.parse(result)
    return decks[deckId].questions
  });
}


//saveDeckTitle
export function saveDeckTitle(title) {
  const deckId = title.toLowerCase()

  return AsyncStorage.mergeItem(
    STORAGE_KEY,
    JSON.stringify({
      [deckId]: {
        title: title,
        questions: []
      }
    })
  );
}


//addCardToDeck
export function AddCardToDeck(id, card) {
  return AsyncStorage.getItem(STORAGE_KEY).then(result => {
    const data = JSON.parse(result);
    data[id].questions.push(card);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  });
}