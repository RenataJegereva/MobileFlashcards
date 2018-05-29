import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
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

  render() {
    const decks = this.props.decks
    console.log(JSON.stringify(decks))
    if (decks === null) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Start by adding the first deck</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Decks list</Text>
        <FlatList
          data={Object.values(decks)}
          renderItem={({ item: { questions, title } }) => {
            return (
              <View>
                <Text style={styles.deckTitle}>{title}</Text>
                <Text style={styles.deckCardCount}>{questions.length} cards</Text>
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
  title: {
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
  containerList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: grey,
    borderRadius: 5,
    marginTop: 15,
    width: 240,
    height: 70
  },
  deckTitle: {
    fontSize: 18,
    color: blue,
    marginBottom: 5
  },
  deckCardCount: {
    color: grey,
    marginBottom: 25
  }
});

export default connect(state => state)(DecksList)