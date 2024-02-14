import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Platform, Alert, Button, TextInput } from 'react-native';
// import React, {useLayoutEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import { useNavigation, useRoute } from '@react-navigation/native'

export default function Contato() {

    return (
        <SafeAreaView style={[styles.androidSafeArea]}>
            <ScrollView>
                <View>

                    <View style={styles.container}>

                        <Image source={require("../../img/logo-senai.png")}
                            style={styles.logo}>
                        </Image>

                        <Text style={styles.labelInput}>Complete seu nome:</Text>
                        <TextInput placeholder='Informe seu nome completo' style={[styles.input]}></TextInput>

                        <Text style={styles.labelInput}>Complete seu email:</Text>
                        <TextInput placeholder='inforeme seu email' style={styles.input}></TextInput>

                        <Text style={styles.labelInput}>Informe sua duvida:</Text>
                        <TextInput placeholder='prencha aqui sua duvida' style={styles.input2}></TextInput>

                    </View>

                    <View style ={styles.botao} >
                        <Button title='Enviar' color='red' onPress={() => Alert.alert('Confirme o envio da mensagem', ' ',
                            [
                                {
                                    text: 'Cancelar',
                                    onPress: () => console.log('Botão cancelar pressionado')
                                },
                                {
                                    text: 'OK',
                                    onPress: () => console.log('Botão OK pressionado')
                                }
                            ])}></Button>
                    </View>

                    <StatusBar style="auto" />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 35 : 0,
    },
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        flex:1
    },

    logo: {
        width: 300,
        height: 250,
    },

    button: {
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: '100%'
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        padding: 10,
        fontSize: 20,
        borderRadius: 10,
    },
    input2: {
        width: '100%',
        height: 200,
        borderWidth: 1,
        padding: 10,
        fontSize: 20,
        borderRadius: 10,
        textAlignVertical: 'top',

    },
    labelInput: {
        width: '100%',
        fontSize: 23,
        fontWeight: 'bold',
        color: "red",
        marginBottom: 5,
        marginTop: 10
    },

    botao:{
        marginBottom: 20,

    },

});
