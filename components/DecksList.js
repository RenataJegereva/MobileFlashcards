import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { fetchDecks } from '../actions'
import { getDecks } from '../utils/api'

class DecksList extends Component {
  componentWillMount() {
    // const data = getDecks()
    // console.log(JSON.stringify(data))
    console.log('will mount')
    // dispatch(fetchDecks(JSON.parse(data)))
  }

  render() {
    // const { navigate } = this.props.navigation
    // console.log('NAV PROPS: ' + JSON.stringify(navigate))
    return (
      <View>
        <Text>Decks List view</Text>
      </View>
    )
  }
}

export default DecksList

// export default connect(
//   mapStateToProps
// )(DecksList)