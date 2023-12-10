import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Border, FontSize, Color, FontFamily } from "../../GlobalStyles";

export default function ProfileScreen1({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.profileScreen01}>
        <Image
          style={[styles.bgIcon, styles.bgIconPosition]}
          resizeMode="cover"
          source={require("../../assets/images/Profilebg.png")}
        />
        <View style={[styles.button, styles.buttonLayout]}>
          <View style={[styles.buttonChild, styles.childLayout]} />
          <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
        </View>
        <View style={styles.personalInformation}>
          <View style={[styles.location, styles.locationLayout]}>
            <View style={[styles.locationChild, styles.locationLayout]} />
            <Text style={[styles.location1, styles.location1Typo]}>Location</Text>
            <Text style={styles.addDetails}>Add Details</Text>
          </View>
          <View style={[styles.birth, styles.locationLayout]}>
            <View style={[styles.locationChild, styles.locationLayout]} />
            <Text style={[styles.dateOfBirth, styles.location1Typo]}>
              Date of birth
            </Text>
            <Text style={styles.textTypo}>DD MM YYYY</Text>
            <Image
              style={[styles.groupIcon, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../../assets/images/groupedit.png")}
            />
          </View>
          <View style={[styles.contactNumber, styles.locationLayout]}>
            <View style={[styles.locationChild, styles.locationLayout]} />
            <Text style={[styles.dateOfBirth, styles.location1Typo]}>
              Contact Number
            </Text>
            <Text style={[styles.text, styles.textTypo]}>+8801800000000</Text>
            <Image
              style={[styles.groupIcon, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../../assets/images/groupedit.png")}
            />
          </View>
          <View style={[styles.name, styles.locationLayout]}>
            <View style={[styles.locationChild, styles.locationLayout]} />
            <Text style={[styles.dateOfBirth, styles.location1Typo]}>Name</Text>
            <Text style={styles.textTypo}>Abdullah Mamun</Text>
          </View>
          <Text style={[styles.personalInformation1, styles.continueTypo]}>
            Personal information
          </Text>
        </View>
        <View style={styles.profilePosition}>
          <View style={[styles.profileChild, styles.profilePosition]} />
          <View style={[styles.setUpYourProfileParent, styles.yourLayout]}>
            <Text style={styles.setUpYour}>Set up your profile</Text>
            <Text
              style={[styles.updateYourProfile, styles.timeTypo1]}
            >{`Update your profile to connect your doctor with
better impression.`}</Text>
          </View>
          <Image
            style={styles.groupIcon2}
            resizeMode="cover"
            source={require("../../assets/images/ProfileImage.png")}
          />
        </View>
        <View style={styles.headline}>
          <View style={styles.groupChildPosition}>
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
              <Image
                style={[styles.groupIcon3, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../../assets/images/group2profile.png")}
              />
            </TouchableOpacity>
          </View>
          <Text style={[styles.profile1, styles.timeTypo]}>Profile</Text>
        </View>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  bgIconPosition: {
    top: 0,
    left: 0,
  },
  buttonLayout: {
    height: 54,
    width: 295,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_xs,
    top: 0,
  },
  continueTypo: {
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  locationLayout: {
    height: 60,
    width: 335,
    left: 0,
    position: "absolute",
  },
  location1Typo: {
    color: Color.colorMediumseagreen,
    fontSize: FontSize.size_3xs,
    left: 20,
    textAlign: "left",
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    letterSpacing: 0,
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    // overflow: "hidden",
  },
  textTypo: {
    top: 28,
    color: Color.colorSlategray,
    fontFamily: FontFamily.rubikLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    left: 20,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  profilePosition: {
    height: 357,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  yourLayout: {
    width: 296,
    position: "absolute",
  },
  timeTypo1: {
    textAlign: "center",
    fontSize: FontSize.size_sm,
  },
  groupChildPosition: {
    width: 30,
    height: 30,
    left: 0,
    top: 0,
    position: "absolute",
  },
  timeTypo: {
    fontFamily: FontFamily.rubikBold,
    fontWeight: "700",
    color: Color.colorWhite,
    letterSpacing: 0,
  },
  capIconPosition: {
    top: "50%",
    position: "absolute",
  },
  timePosition: {
    marginTop: -9,
    top: "50%",
    height: 18,
    left: 0,
    position: "absolute",
  },
  borderPosition: {
    height: 11,
    top: "50%",
    position: "absolute",
  },
  bgIcon: {
    width: 544,
    height: 899,
    left: 0,
    position: "absolute",
  },
  buttonChild: {
    backgroundColor: Color.colorMediumseagreen,
    height: 54,
    width: 295,
    position: "absolute",
    left: 0,
  },
  continue: {
    top: 15,
    left: 108,
    width: 79,
    height: 22,
    color: Color.colorWhite,
    letterSpacing: 0,
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_lg,
  },
  button: {
    top: 708,
    left: 40,
  },
  locationChild: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xs,
    top: 0,
  },
  location1: {
    top: 8,
  },
  addDetails: {
    top: 27,
    color: Color.colorSlategray,
    fontFamily: FontFamily.rubikLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    left: 20,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  location: {
    top: 244,
  },
  dateOfBirth: {
    top: 9,
  },
  groupIcon: {
    height: "24.88%",
    width: "4.48%",
    top: "38.33%",
    right: "5.97%",
    bottom: "36.79%",
    left: "89.55%",
  },
  birth: {
    top: 173,
  },
  text: {
    width: 132,
    height: 18,
  },
  contactNumber: {
    top: 103,
  },
  name: {
    top: 33,
  },
  personalInformation1: {
    color: "#333",
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_lg,
    left: 0,
    top: 0,
  },
  personalInformation: {
    top: 372,
    height: 304,
    width: 335,
    left: 20,
    position: "absolute",
  },
  profileChild: {
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    backgroundColor: Color.colorMediumseagreen,
  },
  setUpYour: {
    left: 80,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    letterSpacing: 0,
    top: 0,
    position: "absolute",
  },
  updateYourProfile: {
    top: 29,
    lineHeight: 23,
    fontFamily: FontFamily.rubikRegular,
    width: 296,
    position: "absolute",
    color: Color.colorWhite,
    letterSpacing: 0,
    left: 0,
  },
  setUpYourProfileParent: {
    top: 100,
    height: 75,
    left: 40,
  },
  groupIcon2: {
    top: 197,
    left: 123,
    width: 142,
    height: 140,
    position: "absolute",
  },
  groupChild: {
    borderRadius: 10,
    backgroundColor: Color.colorWhite,
  },
  groupIcon3: {
    // height: "42.38%",
    width: "23.33%",
    top: "30%",
    right: "36.67%",
    bottom: "27.62%",
    left: "40%",
  },
  profile1: {
    top: 5,
    left: 49,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
    fontWeight: "700",
  },
  headline: {
    top: 36,
    width: 107,
    height: 30,
    left: 20,
    position: "absolute",
  },
  time: {
    width: 54,
    fontFamily: FontFamily.rubikBold,
    fontWeight: "700",
    color: Color.colorWhite,
    letterSpacing: 0,
    textAlign: "center",
    fontSize: FontSize.size_sm,
  },
  border: {
    marginTop: -5.36,
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    width: 21,
  },
  capIcon: {
    marginTop: -1.89,
    width: 1,
    height: 4,
    right: 0,
  },
  capacity: {
    marginTop: -3.47,
    right: 4,
    borderRadius: 1,
    width: 17,
    height: 7,
    backgroundColor: Color.colorWhite,
  },
  battery: {
    marginTop: -6.04,
    width: 23,
    right: 0,
  },
  wifiIcon: {
    width: 14,
    height: 10,
  },
  cellularConnectionIcon: {
    width: 16,
    height: 10,
  },
  timeParent: {
    width: 349,
  },
  statsBer: {
    marginTop: -397,
    left: 6,
    width: 349,
    height: 18,
  },
  profileScreen01: {
    backgroundColor: "#f9f8f8",
    flex: 1,
    width: "100%",
    height: 812,
    // overflow: "hidden",
  },
});