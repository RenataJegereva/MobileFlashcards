import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

class Quiz extends Component {

  componentDidMount() {
    clearLocalNotification()
      .then(setLocalNotification)
  }

  render() {
    const deckId = this.props.navigation.state.params.deckId

    return (
      <View>
        <Text>Quiz deck id: {deckId}</Text>
      </View>
    )
  }
}

export default Quiz