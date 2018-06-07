import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { grey, purple, white } from '../utils/colours'
import { connect } from 'react-redux'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'

class Deck extends Component {

  addCardToDeck = (title) => {
    const { navigation } = this.props
    navigation.navigate('AddCardToDeck', {
      title
    });
  }

  render() {
    const { decks, navigation } = this.props

    const deck = decks[navigation.state.params.deckId]
    // alert(JSON.stringify()
    // console.log('deck in Deck.js: ' + JSON.stringify(deck))
    const deckCardCount = deck.questions.length

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{deck.title}</Text>
        <Text style={styles.deckCardCount}>This deck has {deckCardCount} card(s).</Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.addCardToDeck(deck.title)}
        >
          <Text style={styles.btnText}>Add a card</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
  deckCardCount: {
    color: grey,
    marginBottom: 25
  },
  containerNavHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textGoBack: {
    color: purple
  },
  btn: {
    backgroundColor: purple,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 20,
    borderRadius: 7
  },
  btnText: {
    color: white
  }
});

export default connect(state => state)(Deck)