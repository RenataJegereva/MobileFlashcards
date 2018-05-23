import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { purple, white } from './utils/colours'
import DecksList from './components/DecksList'
import AddDeck from './components/AddDeck'
import { Constants } from 'expo'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'

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
      tabBarLabel: 'Decks List',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards-playing-outline' size={30} color={tintColor} />
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      title: 'Add Deck',
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    }
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})


// const Tabs = createBottomTabNavigator({
//   DecksList: {
//     screen: DecksList,
//     navigationOptions: {
//       title: 'Decks List',
//       tabBarLabel: 'Decks List',
//       tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards-playing-outline' size={30} color={tintColor} />
//       // tabBarIcon: () => <MaterialCommunityIcons name='cards' size={30} />
//     }
//   },
//   AddDeck: {
//     screen: AddDeck,
//     navigationOptions: {
//       title: 'Add Deck',
//       tabBarLabel: 'Add Deck',
//       tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
//       // tabBarIcon: () => <MaterialCommunityIcons name='cards-playing-outline' size={30} />
//     }
//   }
// });

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