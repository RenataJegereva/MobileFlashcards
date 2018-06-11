import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'
import { getDeck } from '../utils/api'

class Quiz extends Component {

  state = {
    cards: [],
    question: '',
    answer: ''
  }

  fetchDeck = async () => {
    let { index } = this.state
    let cards = await getDeck(this.props.navigation.state.params.deckId)
    console.log(JSON.stringify(cards))//returns all decks, not cards for a specific deck
    console.log('quiz.js ' + typeof cards)//is a string
    // this.setState({cards: cards})
  }

  componentDidMount() {
    clearLocalNotification()
      .then(setLocalNotification)

      this.fetchDeck()
  }

  render() {
    const { navigation } = this.props
    const deckId = navigation.state.params.deckId
    console.log('quiz.js cards in render: ' + JSON.stringify(this.state.cards))
    return (
      <View>
        <Text>Quiz deck id: {deckId}</Text>
      </View>
    )
  }
}

export default Quiz