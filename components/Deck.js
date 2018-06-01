import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Deck extends Component {
  render() {
    // console.log('DECK navigate prop: ' + JSON.stringify(this.props.navigation))
    return (
      <View>
        <Text>Deck view</Text>
      </View>
    )
  }
}

export default Deck