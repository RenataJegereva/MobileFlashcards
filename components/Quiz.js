import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Quiz extends Component {

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