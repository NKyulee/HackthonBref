import React, { useState } from 'react';
import { ImageBackground, View, Text, TextInput, StyleSheet, Button, Image } from "react-native";

const image = { uri: "https://cdn.discordapp.com/attachments/806125256413937704/812072118270296089/Photo.png" }

const LoginScreen = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <Image style={styles.logo} source={require('../../assets/logoBref.png')} />
                <Text style={styles.titre}>Bienvenue !</Text>
                <Text style={styles.titre}>Connectez-vous pour commencer !</Text>
                <TextInput style={styles.input} placeholder="Email" />
                <TextInput style={styles.input} placeholder="Mot de passe" />
                <View>
                    <Button
                        style={styles.button}
                        title="Se connecter"
                        onPress={() => navigation.navigate('Home')}
                    />
                    <Button
                        style={styles.button}
                        title="S'enregistrer"
                        onPress={() => navigation.navigate('Register')}
                    />
                </View>
            </ImageBackground>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        textAlign: 'center'
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        color: "#fff",
        textAlign: "center",
        fontSize: 50,
        fontWeight: "bold"
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    button: {
        width: 10
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
    },
});


