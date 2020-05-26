import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Pergunta from '../components/Pergunta';
import styles from '../services/styles';
import questions from '../services/questions';

export default class App extends Component {
  constructor() {
    super();
    
    this.state = {
      count: 0,
      points: 0,
      currentQuestion: questions[0]
    };
  }

  componentDidMount() {
    this.setState({ currentQuestion: this.getQuestion() });
  }

  getQuestion() {
    let index;
    if (this.state.count < 20) {
      do {
        index = Math.floor(Math.random() * questions.length);
      } while (questions[index].isAnswered);
      questions[index].isAnswered = true;
    }
    return questions[index];
  }

  handleAnswerPress(pressed) {
    this.incrementCount();

    if (this.state.count < 19) {
      if (pressed.isCorrect) {
        switch (this.state.currentQuestion.type) {
          case 'E':
            this.incrementPoints(1);
            break;
          case 'M':
            this.incrementPoints(2);
            break;
          case 'H':
            this.incrementPoints(4);
            break;
        }
      }

      // Próxima pergunta
      this.setState({
        currentQuestion: this.getQuestion()
      });
    } else {
      console.log("FIM :D")
      console.log(this.state.points)
      //this.props.navigation.navigate("EndScreen", { points: this.state.points })
    }
  }

  incrementPoints(amount) {
    this.setState({
      points: this.state.points + amount
    });
  }

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Points: {this.state.points}</Text>
        <Text>Count: {this.state.count}</Text>

        <Pergunta
          handler={this.handleAnswerPress.bind(this)}
          pergunta={this.state.currentQuestion}
          number={this.state.count + 1}
        />
      </View>
    );
  }
}
