import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RecoverPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleRecoverPassword = () => {
        // Mock password recovery process
        if (email === 'test@example.com') {
            setMessage('Password recovery email sent.');
        } else {
            setMessage('Email not found.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recover Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
            />
            <Button title="Recover Password" onPress={handleRecoverPassword} />
            {message ? <Text style={styles.message}>{message}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    message: {
        marginTop: 16,
        textAlign: 'center',
        color: 'green',
    },
});

export default RecoverPassword;