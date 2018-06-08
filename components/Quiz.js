import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'
import { getDeck } from '../utils/api'

class Quiz extends Component {

  state = {
    cards: [],
    index: 0,
    question: '',
    answer: ''
  }

  async componentDidMount() {
    clearLocalNotification()
      .then(setLocalNotification)

    //get cards for this deck
    const deckId = this.props.navigation.state.params.deckId
    const cards = await getDeck(deckId)
    this.setState({cards: JSON.parse(cards)})
  }

  render() {
    const { navigation } = this.props
    const deckId = navigation.state.params.deckId

    console.log('quiz.js - cards in render(): ' + JSON.stringify(this.state.cards))
    return (
      <View>
        <Text>Quiz deck id: {deckId}</Text>
      </View>
    )
  }
}

export default Quiz