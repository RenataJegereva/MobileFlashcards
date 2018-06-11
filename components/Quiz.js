import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'
import { getDeck } from '../utils/api'
import { grey, purple, white, blue, red } from '../utils/colours'

class Quiz extends Component {

  state = {
    cards: [],
    index: 0,
    question: '',
    answer: '',
    score: 0,
    flipCard: false,
    finishedQuiz: false
  }

  fetchDeck = async () => {
    let { index } = this.state
    let cards = await getDeck(this.props.navigation.state.params.deckId)
    this.setState({ cards: cards, question: cards[index].question, answer: cards[index].answer })
  }

  componentDidMount() {
    clearLocalNotification().then(setLocalNotification)
      this.fetchDeck()
  }

  markAnswer = (correct) => {
    let { cards, score, index, finishedQuiz } = this.state

    score = correct ? score + 1 : score
    index++
    finishedQuiz = index === cards.length
    this.setState({ index: index, score: score, finishedQuiz: finishedQuiz })

    finishedQuiz ?
    clearLocalNotification().then(setLocalNotification)
    : this.setState({ question: cards[index].question, answer: cards[index].answer })
  }

  toggleCard = () => {
    this.setState({ flipCard: !this.state.flipCard })
  }

  startAgain = () => {
    this.setState({ index: 0, score: 0, finishedQuiz: false })
  }

  render() {
    const { cards, question, score, answer, index, finishedQuiz, flipCard } = this.state
    const totalNoOfCards = cards.length

    return (
      <View style={styles.container}>
        {
          finishedQuiz ?
          (
            //final score
            <View>
              <Text style={styles.heading}>Your score: { Math.round((score/totalNoOfCards)*100) }%</Text>
              <Text style={styles.score}>{ score } correct answers out of { totalNoOfCards }</Text>
              <TouchableOpacity
                style={styles.btn}
                onPress={this.startAgain}
              >
                <Text style={styles.btnText}>Start again</Text>
              </TouchableOpacity>
            </View>
          )
          : !flipCard ?
                    (
                    //question
                    <View style={styles.container}>
                      <Text style={styles.lblText}>Question { index + 1 } out of { totalNoOfCards }</Text>
                      <Text style={styles.heading}>{ question }</Text>

                      <TouchableOpacity
                        style={styles.btn}
                        onPress={this.toggleCard}
                      >
                        <Text style={styles.btnText}>Show Answer</Text>
                      </TouchableOpacity>
                      <Text style={styles.textQuestionsLeft}>Questions left: { totalNoOfCards - index }</Text>
                    </View>
                    )
                    : (
                      //answer
                      <View style={styles.container}>
                        <Text style={styles.lblText}>Answer:</Text>
                        <Text style={styles.heading}>{ answer }</Text>
                        <TouchableOpacity
                          style={styles.btn}
                          onPress={() => {
                            this.markAnswer(true)
                            this.toggleCard()
                          }}
                        >
                          <Text style={styles.btnText}>Correct</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[styles.btn, {backgroundColor: red}]}
                          onPress={() => {
                            this.markAnswer(false)
                            this.toggleCard()
                          }}
                        >
                          <Text style={styles.btnText}>Incorrect</Text>
                        </TouchableOpacity>
                      </View>
                    )
        }
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
  lblText: {
    color: grey
  },
  heading: {
    marginTop: 20,
    fontSize: 20,
    letterSpacing: 1,
    textShadowOffset: {
      width: 1,
      height: 1
    },
    textShadowColor: grey,
    textShadowRadius: 3
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: purple,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 20,
    borderRadius: 7
  },
  btnText: {
    fontSize: 18,
    color: white,
    marginBottom: 5
  },
  textQuestionsLeft: {
    color: grey,
    marginTop: 20,
    justifyContent: 'center'
  },
  score: {
    marginTop: 20,
    marginBottom: 10
  }
});


export default Quiz