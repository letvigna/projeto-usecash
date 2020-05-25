import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from '../services/styles';

const Pergunta = props => {
    let type;
    switch (props.pergunta.type) {
        case ('E'):
            type = 'Fácil';
            break;
        case ('M'):
            type = 'Intermediário';
            break;
        case ('H'):
            type = 'Avançado';
            break;
    };

    let options = props.pergunta.options.map((info, index) => {
        return (
            <TouchableOpacity
                key={index}
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
                <Text style={styles.questionType}>{type}</Text>
                <Text style={styles.question}>{props.pergunta.question}</Text>
            </View>
            <View style={styles.answersView}>{options}</View>
        </View>
    );
};

export default Pergunta;
