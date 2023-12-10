import React, { useState } from 'react'
import { Alert, StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, TextInput, Pressable } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const initialState = { email: '', password: '' }

export default function Login({ navigation }) {
    const [state, setState] = useState(initialState)
    const handleChange = (name, val) => {
        setState(s => ({ ...s, [name]: val }))
    }

    return (
        <SafeAreaView style={styles.Container}>
            <View style={{ marginTop: 40 }}>
                <Text style={styles.text}>Book an Appointment</Text>
            </View>

            <KeyboardAvoidingView>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.text1}>Log In to your Account</Text>
                </View>

                <View style={{ marginTop: 70 }}>
                    <View style={styles.inputContainer}>
                        <MaterialIcons style={{ marginLeft: 8 }} name="email" size={20} color="gray" />
                        <TextInput
                            name="email"
                            value={state.email}
                            onChangeText={val => handleChange("email", val)}
                            style={[styles.textInput, { fontSize: state.email ? 16 : 16 }]}
                            placeholder='enter your email' />
                    </View>
                    <View style={styles.inputContainer}>
                        <AntDesign style={{ marginLeft: 8 }} name="lock" size={20} color="gray" />
                        <TextInput
                            name="password"
                            value={state.password}
                            onChangeText={val => handleChange("password", val)}
                            style={[styles.textInput, { fontSize: state.password ? 16 : 16 }]}
                            secureTextEntry={true}
                            placeholder='enter your password' />
                    </View>
                </View>
                <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text>Keep me logged in</Text>
                    <Text style={{ color: "#007FFF", fontWeight: "500" }}>Forget Password?</Text>
                </View>

                <View style={{ marginTop: 90 }} />
                <Pressable style={styles.button}>
                    <Text style={{ textAlign: "center", color: "white", fontSize: 16, fontWeight: "bold" }}>Log in</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Register")} style={{ marginTop: 10 }}>
                    <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>Don't have an account? Sign Up</Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center"
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
        color: "red"
    },
    text1: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#041E42",
        marginTop: 40
    },
    inputContainer: {
        marginTop: 35,
        flexDirection: "row",
        alignItems: "center",
        gap: 3,
        backgroundColor: "#D0D0D0",
        paddingVertical: 1,
        borderRadius: 5,
    },
    textInput: {
        color: "gray",
        width: 280
    },
    button: {
        width: 200,
        backgroundColor: "#FEBE10",
        borderRadius: 6,
        marginLeft: "auto",
        marginRight: "auto",
        padding: 15,
    }
})