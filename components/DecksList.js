import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { fetchDecks } from '../actions'
import { getDecks } from '../utils/api'

class DecksList extends Component {

  async componentDidMount() {
    const { dispatch } = this.props
    const data = await getDecks()
    dispatch(fetchDecks(JSON.parse(data)))
  }

  render() {
    const decks = this.props.decks

    if (decks === null) {
      return (
        <View>
          <Text>Start by adding the first deck</Text>
        </View>
      );
    }
    return (
      <View>
        <Text>Decks default</Text>
      </View>
    );
  }
}

export default connect(state => state)(DecksList)