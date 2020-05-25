import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from '../services/styles';

const EndScreen = props => {
    console.log(props);
    return (
        <View style={styles.container}>
            <Text style={styles.questionHeader}>Pontos: {props.route.params.points}</Text>
            <TouchableOpacity
                style={styles.playAgainButton}
                onPress={() => console.log("a")}>
                <Text style={styles.playAgainText}>Jogar novamente</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EndScreen;
