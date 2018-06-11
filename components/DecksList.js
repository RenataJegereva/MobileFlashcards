import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { fetchDecks } from '../actions'
import { getDecks } from '../utils/api'
import { grey, white, purple, blue } from '../utils/colours'

class DecksList extends Component {

  async componentDidMount() {
    const { dispatch } = this.props
    const data = await getDecks()
    dispatch(fetchDecks(JSON.parse(data)))
  }

  handleonPress = (title) => {
    const deckId = (title).toLowerCase()
    this.props.navigation.navigate('Deck', { deckId })
  }

  render() {
    const decks = this.props.decks

    if (decks === null) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Start by adding the first deck</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Decks list</Text>
        <FlatList
          data={Object.values(decks)}
          renderItem={({ item: { questions, title } }) => {
            return (
              <View>
                <TouchableOpacity
                  style={styles.btnTitle}
                  onPress={() => this.handleonPress(title)}
                >
                  <Text style={styles.decktitle}>{title}</Text>
                </TouchableOpacity>
                <Text style={styles.deckCardCount}>this deck has {questions.length} card(s)</Text>
              </View>
            );
          }}
          keyExtractor={item => item.title}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    margin: 20,
    fontSize: 30,
    letterSpacing: 2,
    fontWeight: 'bold',
    textShadowOffset: {
      width: 1,
      height: 1
    },
    textShadowColor: grey,
    textShadowRadius: 3
  },
  btnTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: blue,
    borderRadius: 5,
    padding: 20
  },
  decktitle: {
    fontSize: 18,
    color: white,
    marginBottom: 5
  },
  deckCardCount: {
    color: grey,
    marginBottom: 25
  }
});

export default connect(state => state)(DecksList)