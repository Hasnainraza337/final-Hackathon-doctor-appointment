import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.homeScreen}>
            <Image
                style={styles.bgIcon}
                resizeMode="cover"
                source={require("../../assets/images/bghome.png")}
            />
            <View style={styles.profilePosition}>
                <View style={[styles.group4, styles.group4Layout]}>
                    <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen1")}>
                        <Image
                            style={styles.imageIcon4}
                            resizeMode="cover"
                            source={require("../../assets/images/ProfileImage.png")}
                        />
                    </TouchableOpacity>
                    <View style={[styles.text18, styles.text18Position]}>
                        <Text
                            style={[styles.hiHandwerker, styles.hours1Typo]}
                        >{`Hi Hasnain! `}</Text>
                        <Text style={[styles.findYourDoctor, styles.text18Position]}>
                            Find Your Doctor
                        </Text>
                    </View>
                </View>
            </View>


            <View style={[styles.search, styles.searchLayout]}>
                <View style={[styles.searchChild, styles.searchLayout]} />

                <TextInput
                    style={[styles.search1, styles.seeAllFlexBox]}
                    placeholder='Search...'
                />

            </View>


            <View style={styles.popularDoctor}>

                <View style={[styles.drBlessing, styles.drBlessingLayout]}>
                    <View style={styles.childShadowBox} />
                    <View style={[styles.text16, styles.text16Layout]}>
                        <View style={[styles.groupParent, styles.text16Layout]}>
                            <View style={styles.drBlessingParent}>
                                <Text style={[styles.featureDoctor1, styles.drCrick1Typo]}>
                                    Dr. Blessing
                                </Text>
                                <Text style={[styles.dentistSpecialist, styles.specialistTypo]}>
                                    Dentist Specialist
                                </Text>
                            </View>
                            <Image
                                style={[styles.starIcon, styles.starIconPosition]}
                                resizeMode="cover"
                                source={require("../../assets/images/star.png")}
                            />
                        </View>
                    </View>
                    <View style={styles.imagePosition}>
                        <Image
                            style={[styles.imageChild, styles.imagePosition]}
                            resizeMode="cover"
                            source={require("../../assets/images/rectangle-508.png")}
                        />
                    </View>
                </View>

                <View style={[styles.drFillerupGrab, styles.drBlessingLayout]}>
                    <View style={styles.childShadowBox} />
                    <View style={styles.text17}>
                        <Image
                            style={[styles.starIcon1, styles.starIconPosition]}
                            resizeMode="cover"
                            source={require("../../assets/images/star.png")}
                        />
                        <View style={styles.drFillerupGrabParent}>
                            <Text style={[styles.featureDoctor1, styles.drCrick1Typo]}>
                                Dr. Fillerup Grab
                            </Text>
                            <Text style={[styles.medicineSpecialist, styles.specialistTypo]}>
                                Medicine Specialist
                            </Text>
                        </View>
                    </View>
                    <View style={styles.imagePosition}>
                        <Image
                            style={[styles.imageChild, styles.imagePosition]}
                            resizeMode="cover"
                            source={require("../../assets/images/rectangle-5081.png")}
                        />
                    </View>
                </View>

                <View style={[styles.headline, styles.group4Layout]}>
                    <Text style={[styles.featureDoctor1, styles.drCrick1Typo]}>
                        Popular Doctor
                    </Text>
                    <View style={styles.seeAllParent}>
                        <Text style={[styles.seeAll, styles.hours1Typo]}>See all</Text>
                        <Image
                            style={[styles.groupIcon, styles.groupIconLayout]}
                            resizeMode="cover"
                            source={require("../../assets/images/group.png")}
                        />
                    </View>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    groupIconLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    groupIcon: {
        height: "44.88%",
        width: "8.7%",
        top: "30.57%",
        right: "0%",
        bottom: "26.55%",
        left: "91.3%",
    },
    hours1Typo: {
        fontWeight: "300",
    },
    seeAll: {
        color: "gray",
        textAlign: "left",
        letterSpacing: 0,
        position: "absolute",
        fontSize: 12,
        left: 0,
        top: 0,
    },
    seeAllParent: {
        top: 5,
        left: 280,
        width: 39,
        height: 14,
        position: "absolute",
    },
    group4Layout: {
        position: "absolute",
        width: 336
    },
    headline: {
        height: 21,
        top: 0,
        left: 0
    },
    starIcon1: {
        width: "59.7%",
        right: "20.15%",
        left: "20.15%",
    },
    text17: {
        height: "20.83%",
        width: "70.53%",
        top: "73.48%",
        right: "14.74%",
        bottom: "5.68%",
        left: "14.74%",
        position: "absolute",
    },
    drFillerupGrab: {
        left: 1,
    },
    medicineSpecialist: {
        top: 23,
        left: 18,
    },
    featureDoctor1: {
        fontSize: 18,
        textAlign: "left",
        left: 0,
    },
    drFillerupGrabParent: {
        width: 134,
        height: 37,
        left: 0,
        top: 0,
        position: "absolute",
    },
    imageChild: {
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 2,
        borderBottomLeftRadius: 2,
    },
    imagePosition: {
        height: 180,
        width: 190,
        left: 0,
        top: 0,
        position: "absolute",
    },
    drCrick1Typo: {
        color: "gray",
        textAlign: "left",
        fontWeight: "500",
        letterSpacing: 0,
        top: 0,
        position: "absolute",
    },
    featureDoctor1: {
        fontSize: 18,
        textAlign: "left",
        left: 0,
    },
    drFillerupGrabParent: {
        width: 134,
        height: 37,
        left: 0,
        top: 0,
        position: "absolute",
    },
    starIconPosition: {
        top: "78.18%",
        height: "21.82%",
        bottom: "0%",
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    starIcon: {
        width: "80.81%",
        right: "9.09%",
        left: "10.1%",
    },
    specialistTypo: {
        color: "gray",
        fontWeight: "300",
        textAlign: "left",
        letterSpacing: 0,
        fontSize: 12,
        position: "absolute",
    },
    dentistSpecialist: {
        top: 22,
        left: 5
    },
    drCrick1Typo: {
        color: "gray",
        textAlign: "left",
        fontWeight: "500",
        letterSpacing: 0,
        top: 0,
        position: "absolute",
    },
    featureDoctor1: {
        left: 0,
        textAlign: "left",
        fontSize: 18
    },
    drBlessingParent: {
        height: 36,
        width: 99,
        left: 0,
        top: 0,
        position: "absolute",
    },
    text16Layout: {
        height: 55,
        width: 99,
        position: "absolute",
    },
    groupParent: {
        left: 0,
        top: 0,
    },
    text16Layout: {
        height: 55,
        width: 99,
        position: "absolute",
    },
    text16: {
        top: 194,
        left: 46,
    },
    childShadowBox: {
        elevation: 40,
        shadowRadius: 40,
        borderRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.08)",
        height: 264,
        width: 190,
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: -1,
        },
        left: 0,
        top: 0,
        position: "absolute",
        backgroundColor: "white",
    },
    drBlessingLayout: {
        height: 264,
        width: 190,
        top: 43,
        position: "absolute",
    },
    drBlessing: {
        left: 206,
    },
    popularDoctor: {
        top: 200,
        width: 396,
        height: 307,
        left: 19,
        position: "absolute",
    },
    homeScreen: {
        flex: 1,
        width: "100%",
        overflow: "hidden",
        height: 1174,
        backgroundColor: "white",
    },
    bgIcon: {
        width: 532,
        left: 0,
        top: 0,
        position: "absolute",
        height: 1174,
    },
    profilePosition: {
        backgroundColor: "#06d6a0",
        position: "absolute",
        left: 0,
        top: 0,
        height: 156,
        width: 375,
    },
    group4: {
        top: 36,
        height: 63,
        left: 19
    },
    group4Layout: {
        position: "absolute",
        width: 336,
    },
    imageIcon4: {
        position: "absolute",
        top: 0,
        left: 260,
        width: 60,
        height: 60,
    },
    text18: {
        height: 52,
        top: 11
    },
    text18Position: {
        width: 205,
        position: "absolute",
        left: 0
    },
    hiHandwerker: {
        fontSize: 20,
        color: "#fafafa",
        width: 136,
        height: 22,
        textAlign: "left",
        letterSpacing: 0,
        position: "absolute",
        left: 0,
        top: 0,
    },
    hours1Typo: {
        fontWeight: "300",
    },
    findYourDoctor: {
        top: 28,
        fontSize: 25,
        fontWeight: "700",
        height: 35,
        color: "white",
        letterSpacing: 0,
        textAlign: "left",
    },
    text18Position: {
        width: 205,
        left: 0,
        position: "absolute",
    },
    search: {
        top: 126,
        left: 14
    },
    searchLayout: {
        position: "absolute",
        width: 335,
        height: 54
    },
    searchChild: {
        shadowColor: "rgba(0, 0, 0, 0.08)",
        width: 335,
        shadowOpacity: 1,
        elevation: 20,
        shadowRadius: 20,
        shadowOffset: {
            width: 0,
            height: -1,
        },
        borderRadius: 6,
        left: 0,
        top: 0,
        backgroundColor: "white",
    },
    search1: {
        // top: 18,
        left: 20,
        fontSize: 15,
        color: "gray",
        textAlign: "left",
    },
    seeAllFlexBox: {
        letterSpacing: 0,
        textAlign: "left",
        position: "absolute",
    },


})