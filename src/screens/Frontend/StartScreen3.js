import React from 'react'
import { Image, StyleSheet, Text, Button, View } from "react-native";

export default function StartScreen3({ navigation }) {
    return (
        <View style={styles.onboardingScreen03}>

            <Image
                style={styles.bgIcon}
                resizeMode="cover"
                source={require("../../assets/images/bg.png")}
            />
            <Image
                style={[styles.imageIcon, styles.imageIconPosition]}
                resizeMode="cover"
                source={require("../../assets/images/image3.png")}
            />

            <View style={styles.text}>
                <Text style={[styles.findTrustedDoctors, styles.getStartedTypo]}>
                    Easy Appointments
                </Text>
                <Text style={[styles.contraryToPopular, styles.skipFlexBox]}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It
                    has roots in a piece of it over 2000 years old.
                </Text>
            </View>

            <View style={[styles.getStarted, styles.getStartedTypo]}>
                <View style={[styles.button, styles.buttonLayout]} >
                    <Button title='Get Started' onPress={() => navigation.navigate("HomeScreen")} />
                </View>
            </View>


            {/* <Text style={[styles.skip, styles.skipFlexBox]}>Skip</Text> */}

        </View>
    )
}

const styles = StyleSheet.create({

    onboardingScreen03: {
        backgroundColor: "white",
        flex: 1,
        width: "100%",
        height: 812,
        overflow: "hidden",
    },

    imageIcon: {
        width: 360,
        height: 440,
        position: "absolute",
    },

    imageIconPosition: {
        left: -10,
        top: -70,
    },

    bgIcon: {
        top: 520,
        left: 91,
        width: 284,
        height: 292,
        position: "absolute",
    },
    text: {
        top: 390,
        left: 49,
        width: 277,
        height: 115,
        position: "absolute",
    },
    findTrustedDoctors: {
        fontSize: 28,
        color: "#333",
        left: 0,
        top: 0,
        textAlign: "center",
        letterSpacing: 0,
    },
    contraryToPopular: {
        top: 45,
        left: 2,
        color: "rgba(103, 114, 148, 0.9)",
        width: 274,
        height: 70,
        lineHeight: 23,
        textAlign: "center",
        letterSpacing: 0,
        // fontSize: FontSize.size_sm,
        position: "absolute",
    },

    getStarted: {
        position: "absolute",
        top: -47,
        left: 30,
        fontSize: 18,
        color: "white",
        textAlign: "left",
        width: 101,
        height: 30,
    },
    getStartedTypo: {
        fontWeight: "500",

    },
    button: {
        top: 610,
        left: 10,
    },
    buttonLayout: {
        position: "absolute",
        height: 60,
        width: 295,
    },
    // buttonChild: {
    //     position: "absolute",
    //     top: -60,
    //     left: 0,
    //     borderRadius: 10,
    //     backgroundColor: "#0ebe7f",
    //     height: 54,
    //     width: 295,
    // },

    // skip: {
    //   top: 630,
    //   left: 175,
    //   color: "#677294",
    //   lineHeight: 23,
    //   textAlign: "center",
    //   letterSpacing: 0,
    //   position: "absolute",
    // },
    // skipFlexBox: {
    //   textAlign: "center",
    //   letterSpacing: 0,
    // },
});