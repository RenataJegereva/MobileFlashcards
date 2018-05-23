import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { createStore } from 'redux'
// import { View, Platform, StatusBar } from 'react-native'
// import { Provider } from 'react-redux'
import { createBottomTabNavigator, StackNavigator } from 'react-navigation'
// import { purple, blue, white } from './utils/colors'
import DecksList from './components/DecksList'
import AddDeck from './components/AddDeck'

const Tabs = createBottomTabNavigator({
  DecksList: {
    screen: DecksList,
    navigationOptions: {
      title: 'Decks List',
      tabBarLabel: 'Decks List'
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      title: 'Add Deck',
      tabBarLabel: 'Add Deck'
    }
  }
});

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  DecksList: {
    screen: DecksList
  }
});


export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <MainNavigator />
      </View>
    );
  }
}