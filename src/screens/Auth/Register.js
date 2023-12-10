import React, { useState } from 'react'
import { StyleSheet, Alert, Text, View, SafeAreaView, KeyboardAvoidingView, TextInput, Pressable } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const initialState = { fullName: '', email: '', phone: '', password: '', confirmPassword: '' }

export default function Register({ navigation }) {
    const [state, setState] = useState(initialState)
    const handleChange = (name, val) => {
        setState(s => ({ ...s, [name]: val }))
    }

    const createUser = async () => {

        const { fullName, email, phone, password, confirmPassword } = state;

        const res = await fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fullName, email, phone, password, confirmPassword
            })
        });

        const data = await res.json();

        if (data.status === 422 || !data) {
            console.log("invalid data")
        } else {
            console.log("Registration successfully")
            Alert.alert("Registeration successfull")
        }

    }


    return (
        <SafeAreaView style={styles.Container}>
            <View style={{ marginTop: 30 }}>
                <Text style={styles.text}>Book an Appoinmint</Text>
            </View>

            <KeyboardAvoidingView>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.text1}>Register to your Account</Text>
                </View>

                <View style={{ marginTop: 5 }}>
                    <View style={styles.inputContainer}>
                        <Ionicons style={{ marginLeft: 8 }} name="person" size={20} color="gray" />
                        <TextInput
                            name="fullName"
                            value={state.fullName}
                            onChangeText={val => handleChange("fullName", val)}
                            style={[styles.textInput, { fontSize: state.fullName ? 16 : 16 }]}
                            placeholder='enter your name' />
                    </View>
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
                        <MaterialIcons style={{ marginLeft: 8 }} name="phone" size={20} color="gray" />
                        <TextInput
                            name="phone"
                            value={state.phone}
                            onChangeText={val => handleChange("phone", val)}
                            style={[styles.textInput, { fontSize: state.phone ? 16 : 16 }]}
                            placeholder='enter your phone' />
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
                    <View style={styles.inputContainer}>
                        <AntDesign style={{ marginLeft: 8 }} name="lock" size={20} color="gray" />
                        <TextInput
                            name="confirmPassword"
                            value={state.confirmPassword}
                            onChangeText={val => handleChange("confirmPassword", val)}
                            style={[styles.textInput, { fontSize: state.confirmPassword ? 16 : 16 }]}
                            secureTextEntry={true}
                            placeholder='enter your confirmPassword' />
                    </View>
                </View>

                <View style={{ marginTop: 60 }} />
                <Pressable onPress={createUser} style={styles.button}>
                    <Text style={{ textAlign: "center", color: "white", fontSize: 16, fontWeight: "bold" }}>Create Account</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Login")} style={{ marginTop: 10 }}>
                    <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>Already have an account? Log In</Text>
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
        marginTop: 20
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