import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { grey, purple, white } from '../utils/colours'
import { connect } from 'react-redux'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'

class NavigationHeader extends React.Component {
  render() {
    return (
      <View style={styles.containerNavHeader}>
        <Text style={styles.textGoBack}> Go back </Text>
        <MaterialCommunityIcons name='cards' size={30} color={purple} />
      </View>
    );
  }
}

class Deck extends Component {
  static navigationOptions = {
    // title: `${this.props.navigation.state.routeName}`,
    headerTintColor: purple,
    headerTitle: <NavigationHeader />
  }

  render() {
    const { decks, navigation } = this.props

    const deck = decks[navigation.state.params.deckId]
    // console.log('deck in Deck.js: ' + JSON.stringify(deck))
    const deckCardCount = deck.questions.length

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{deck.title}</Text>
        <Text style={styles.deckCardCount}>This deck has {deckCardCount} card(s).</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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
    alignItems: "center"
  },
  textGoBack: {
    color: purple
  }
});

export default connect(state => state)(Deck)