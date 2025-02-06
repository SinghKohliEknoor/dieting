import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type WelcomeProps = {username: string};

const Welcome: React.FC<WelcomeProps> = ({username}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome, {username}!</Text>
        </View>
    );
};

// const Welcome = () => {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.text}>Welcome to my dieting app</Text>
//         </View>
//     );
// };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default Welcome;