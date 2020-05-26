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
      easyCount: 0,
      mediumCount: 0,
      hardCount: 0,
      points: 0,
      currentQuestion: questions[0]
    };
  }

  componentDidMount() {
    this.setState({
      currentQuestion: this.getQuestion()
    });

    this.props.navigation.addListener('blur', () => {
      this.setState({
        count: 0,
        easyCount: 0,
        mediumCount: 0,
        hardCount: 0,
        points: 0,
        currentQuestion: this.getQuestion()
      });
    });
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

  getRandomQuestion() {
    do {
      index = Math.floor(Math.random() * questions.length);
    } while (questions[index].isAnswered);
    return questions[index];
  }

  getTypeQuestion(type) {
    let index;
    do {
      do {
        index = Math.floor(Math.random() * questions.length);
      } while (questions[index].type != type);
    } while (questions[index].isAnswered);
    return questions[index];
  }

  getQuestion() {
    let question;
    // Pegar aleatoriamente até Pergunta #6
    if (this.state.count < 5) {
      question = this.getRandomQuestion()
      switch (question.type) {
        case 'E':
          this.setState({ easyCount: this.state.easyCount + 1 });
          break;
        case 'M':
          this.setState({ mediumCount: this.state.mediumCount + 1 });
          break;
        case 'H':
          this.setState({ hardCount: this.state.hardCount + 1 });
          break;
      }
    }
    // "Completar" com as dificuldades que faltam (em ordem E -> M -> H)
    else {
      if (this.state.easyCount < 5) {
        question = this.getTypeQuestion('E');
        this.setState({ easyCount: this.state.easyCount + 1 });
      } else if (this.state.mediumCount < 5) {
        question = this.getTypeQuestion('M');
        this.setState({ mediumCount: this.state.mediumCount + 1 });
      } else if (this.state.hardCount < 5) {
        question = this.getTypeQuestion('H');
        this.setState({ hardCount: this.state.hardCount + 1 });
      }
      // Se não houver nenhuma dificuldade com menos do que 5, pegar aleatoriamente
      else {
        question = this.getRandomQuestion();
      }
    }
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
