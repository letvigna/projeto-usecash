import React, { useState } from 'react';
import { View } from 'react-native';

import Pergunta from '../components/Pergunta';
import styles from '../services/styles';
import questions from '../services/questions';

export default function Perguntas({navigation}) {
  const [points, setPoints] = useState(0);
  const [count, setCount] = useState(0);

  const updatePoints = (add) => {
    setPoints(points + add);
    console.log(points);
  }

  const getQuestion = () => {
    let index;
    if (count < 20) {
      do {
        index = Math.floor(Math.random() * questions.length);
      } while (questions[index].isAnswered);
      questions[index].isAnswered = true;
    }
    return questions[index];
  };

  const [currentQuestion, setCurrentQuestion] = useState(getQuestion());

  const handleOnPress = (pressed, difficulty) => {
    setCount(count + 1);

    if (count < 19) {
      if (pressed.isCorrect) {
        switch (difficulty) {
          case 'E':
            updatePoints(1);
            break;
          case 'M':
            updatePoints(2);
            break;
          case 'H':
            updatePoints(4);
            break;
        }
      }
      setCurrentQuestion(getQuestion());
    }
    else {
      navigation.navigate("EndScreen", {points: points});
    }
    console.log(count);
  };

  return (
    <View style={styles.container}>
      <Pergunta
        handler={handleOnPress}
        pergunta={currentQuestion}
        number={count+1}
      />
    </View>
  );
}
