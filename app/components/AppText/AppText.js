import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

// <Heading>ToDo</Heading>
function AppText({ childeren }) {
    return <Text style={styles.text}>{childeren}</Text>;
}


export default AppText;