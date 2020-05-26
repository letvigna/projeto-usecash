import React, { Component } from 'react';
import { View } from 'react-native';

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

    this.props.navigation.addListener('focus', () => {
      this.setState({
        count: 0,
        points: 0,
        currentQuestion: this.getQuestion()
      });
    });
  }

  getTypeQuestion(type) {
    let index;
    do {
      index = Math.floor(Math.random() * questions.length);
    } while (questions[index].type != type);
    return questions[index];
  }

  getQuestion() {
    let question;
    do {
      // 6 fáceis (1-6)
      if (this.state.count < 5) {
        question = this.getTypeQuestion('E');
      }
      // 7 médias (7-13)
      else if (this.state.count >= 5 && this.state.count < 12) {
        question = this.getTypeQuestion('M');
      }
      // 7 difíceis (14-20)
      else {
        question = this.getTypeQuestion('H');
      }
    } while (question.isAnswered);
    question.isAnswered = true;

    return question;
  }

  handleAnswerPress(pressed) {
    if (this.state.count < 19) {
      this.incrementCount();

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
      this.props.navigation.navigate("EndScreen", { points: this.state.points })
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
        <Pergunta
          handler={this.handleAnswerPress.bind(this)}
          pergunta={this.state.currentQuestion}
          number={this.state.count + 1}
        />
      </View>
    );
  }
}
