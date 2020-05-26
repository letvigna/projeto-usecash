import React, { useState, useReducer } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View } from 'react-native';

import Pergunta from '../components/Pergunta';
import styles from '../services/styles';
import questions from '../services/questions';

export default function Perguntas({ navigation }) {
  function reducer(state, action) {
    console.log(state);
    switch (action.type) {
      case 'incrementPoints':
        return { count: state.count, points: state.points + action.value };
      case 'incrementCount':
        return { count: state.count + 1, points: state.points };
      case 'reset':
        return { count: 0, points: 0 };
      default:
        throw new Error();
    }
  }

  const getQuestion = () => {
    let index;
    if (state.count < 20) {
      do {
        index = Math.floor(Math.random() * questions.length);
      } while (questions[index].isAnswered);
      questions[index].isAnswered = true;
    }
    return questions[index];
  };

  const [state, dispatch] = useReducer(reducer, { count: 0, points: 0 });
  const [currentQuestion, setCurrentQuestion] = useState(getQuestion());

  // Quando a tela de Perguntas estiver em foco
  useFocusEffect(
    React.useCallback(() => {
      dispatch({ type: 'reset' });
      setCurrentQuestion(getQuestion());
    }, [])
  );

  const updatePoints = (add) => {
    dispatch({ type: 'incrementPoints', value: add });
  }

  const handleOnPress = (pressed, difficulty) => {
    dispatch({ type: 'incrementCount' });
    console.log("incrementCount dispatch ", state.count)

    if (state.count < 19) {
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
      navigation.navigate("EndScreen", { points: state.points });
    }
  };

  return (
    <View style={styles.container}>
      <Pergunta
        handler={handleOnPress}
        pergunta={currentQuestion}
        number={state.count + 1}
      />
    </View>
  );
}
