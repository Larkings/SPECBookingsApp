import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

// <Heading>ToDo</Heading>
function AppText({ childeren }) {
    return <Text style={styles.text}>{childeren}</Text>;
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    }
})
export default AppText;