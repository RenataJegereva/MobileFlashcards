import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'
import { getDeck } from '../utils/api'

class Quiz extends Component {

  state = {
    cards: '',
    index: 0,
    question: '',
    answer: ''
  }

  fetchDeck() {
    const { navigation } = this.props
    const deckId = navigation.state.params.deckId
    let cards

    getDeck(deckId).then(response => cards = response).then(this.setState({cards: cards}))
  }

  componentDidMount() {
    clearLocalNotification()
      .then(setLocalNotification)

      this.fetchDeck()
  }

  render() {
    const { navigation } = this.props
    const deckId = navigation.state.params.deckId
    console.log('QUIZ.js - deck cards data by deckId: ' + JSON.stringify(this.state.cards))
    return (
      <View>
        <Text>Quiz deck id: {deckId}</Text>
      </View>
    )
  }
}

export default Quiz