import React, { Component } from 'react'
import { View, Text, StyleSheet,  KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native'
import { AddCardToDeck } from '../utils/api'
import { addCard } from '../actions'
import { purple, white, blue, grey } from '../utils/colours'
import { connect } from 'react-redux'

class AddCard extends Component {

  state = {
    question: '',
    answer: ''
  }

  addCard = () => {
    const { navigation, dispatch } = this.props
    const { question, answer } = this.state

    const deckId = (navigation.state.params.title).toLowerCase()
    dispatch(addCard(deckId, { question, answer }))
    AddCardToDeck(deckId, { question, answer })

    navigation.goBack()
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.heading}>New card</Text>
        <View style={styles.containerInput}>
          <TextInput
            placeholder='Question'
            style={styles.input}
            multiLine={true}
            numberOfLines = {4}
            autoFocus={true}
            value={this.state.question}
            onChangeText={question => this.setState({ question })}
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            placeholder='Answer'
            style={styles.input}
            multiLine={true}
            numberOfLines = {4}
            value={this.state.answer}
            onChangeText={answer => this.setState({ answer })}
          />
        </View>
        <TouchableOpacity style={styles.btn} onPress={this.addCard}>
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
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

export default connect()(AddCard)