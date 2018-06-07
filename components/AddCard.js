import React, { Component } from 'react'
import { View, Text, StyleSheet,  KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native'
import { AddCardToDeck } from '../utils/api'
import { purple, white, blue, grey } from '../utils/colours'
import { connect } from 'react-redux'

class AddCard extends Component {

  state = {
    question: 'blah question',
    answer: 'blah answer'
  }

  addCard = () => {
    alert('ok')
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.heading}>New Card</Text>
        <View style={styles.containerInput}>
          <TextInput
            placeholder='Question'
            style={styles.input}
            multiLine={true}
            value={this.state.question}
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            placeholder='Answer'
            style={styles.input}
            multiLine={true}
            value={this.state.answer}
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