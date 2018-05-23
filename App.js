import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { purple } from './utils/colours'
import DecksList from './components/DecksList'
import AddDeck from './components/AddDeck'
import { Constants } from 'expo'

function FlashcardsStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

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

const MainNavigator = createStackNavigator({
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
        <FlashcardsStatusBar backgroundColor={purple} barStyle="light-content" />
        <MainNavigator />
      </View>
    );
  }
}