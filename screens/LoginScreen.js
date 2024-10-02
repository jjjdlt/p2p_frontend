import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { YStack } from '@tamagui/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebaseConfig';
import tokens from '../tokens';

const auth = getAuth(app);

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('Logged in with user:', user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    };

    return (
        <YStack style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <Button title="Login" onPress={handleLogin} />
        </YStack>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: tokens.space.md, // Using tokens for styling
    },
    title: {
        fontSize: tokens.size.lg, // Using tokens for styling
        marginBottom: tokens.space.md,
    },
    input: {
        width: '100%',
        padding: tokens.space.sm,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: tokens.space.md,
    },
    error: {
        color: 'red',
        marginBottom: tokens.space.md,
    },
});

export default LoginScreen;
