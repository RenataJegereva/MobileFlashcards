import { composeWithDevTools } from 'remote-redux-devtools'
import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { purple, white, blue } from './utils/colours'
import DecksList from './components/DecksList'
import AddDeck from './components/AddDeck'
import { Constants } from 'expo'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const store = createStore(
//   reducer,
//   composeEnhancers(
//     applyMiddleware(thunk, logger)
//   )
// )
const composeEnhancers = composeWithDevTools({ realtime: true, port: 19001 });
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk, logger)
));

console.log('STORE: ' + JSON.stringify(store.getState()))


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
      header: null,
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
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />,
      headerTintColor: purple,
      headerStyle: {
        backgroundColor: purple
      }
    }
  }
},
  {
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    labelStyle: {
      fontSize: 14,
    },
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

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs
  },
  DecksList: {
    screen: DecksList,
    navigationOptions: {
      header: null
    },
  }
})

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <FlashcardsStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}