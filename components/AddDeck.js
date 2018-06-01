import React, { Component } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native'
import { addDeck } from '../actions'
import { connect } from 'react-redux'
import { saveDeckTitle } from '../utils/api'
import { purple, white, blue, grey } from '../utils/colours'

class AddDeck extends Component {

  state = {
    title: ''
  }

  addDeck = () => {
    const { title } = this.state
    const deckId = title.toLowerCase()

    this.props.dispatch(addDeck(title))
    this.props.navigation.navigate('Deck', { deckId })
    saveDeckTitle(title)
    this.setState({ title: '' })
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.heading}>New deck</Text>
        <View style={styles.containerInput}>
          <TextInput
            placeholder='Deck title'
            style={styles.input}
            onChangeText={title => this.setState({title})}
            value={this.state.title}
          />
        </View>
        <TouchableOpacity style={styles.btn} onPress={this.addDeck}>
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerInput: {
    flexDirection: 'row',
    height: 30,
    marginTop: 50,
    marginLeft: 15,
    marginRight: 15
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
  input: {
    flex: 1,
    borderBottomWidth: 1,
    color: blue
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
})

export default connect()(AddDeck)