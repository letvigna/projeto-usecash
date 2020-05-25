import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

import styles from './services/styles';
import questions from './services/questions';

const Pergunta = props => {
  let options = props.pergunta.options.map(info => {
    return (
      <TouchableOpacity
        style={styles.answerButton}
        onPress={() => props.handler(info, props.pergunta.type)}>
        <Text style={styles.answer}>{info.text}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.questionView}>
        <Text style={styles.questionHeader}>Pergunta #{props.number}</Text>
        <Text style={styles.question}>{props.pergunta.question}</Text>
      </View>
      <View style={styles.answersView}>{options}</View>
    </View>
  );
};

export default function Perguntas() {
  const [points, setPoints] = useState(0);
  const [count, setCount] = useState(0);
  const [easyCount, setEasyCount] = useState(0);
  const [mediumCount, setMediumCount] = useState(0);
  const [hardCount, setHardCount] = useState(0);

  const getQuestion = () => {
    //setCount(count + 1);
    let index = 0;

    if (count <= 19) {
      //do {
      //index = Math.floor(Math.random() * questions.length);
      //} while (questions[index].isAnswered);
      //questions[index].isAnswered = true;
      //if (questions[index].type == 'E') {
      //setEasyCount(easyCount + 1);
      //}
      //console.log(easyCount);
    }

    return questions[index];
  };

  const handleOnPress = (pressed, difficulty) => {
    if (pressed.isCorrect) {
      switch (difficulty) {
        case 'E':
          setPoints(points + 1);
          break;
        case 'M':
          setPoints(points + 2);
          break;
        case 'H':
          setPoints(points + 4);
          break;
      }
    }
  };

  return (
    <View style={styles.container}>
      <Pergunta
        handler={handleOnPress}
        pergunta={getQuestion()}
        number={count + 1}
      />
    </View>
  );
}
