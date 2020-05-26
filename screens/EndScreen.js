import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from '../services/styles';

export default function EndScreen({ route, navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.questionHeader}>Pontos: {route.params.points}</Text>
            <TouchableOpacity
                style={styles.playAgainButton}
                onPress={() => navigation.navigate("QuestionScreen")}>
                <Text style={styles.playAgainText}>Jogar novamente</Text>
            </TouchableOpacity>
        </View>
    );
};
