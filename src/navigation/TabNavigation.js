import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Frontend/HomeScreen';
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import DoctorScreen from '../screens/Frontend/DoctorScreen';
import PatientScreen from '../screens/Frontend/PatientScreen';

const Tab = createBottomTabNavigator();


export default function TabNavigation() {
    return (

        <Tab.Navigator screenOptions={{ headerShown: false }} >
            <Tab.Screen name="BotomTab" component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    headerTitle: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5Icon name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="Doctor" component={DoctorScreen}
                options={{
                    headerTitle: "Doctor",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome6 name="user-doctor" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="Patient" component={PatientScreen}
                options={{
                    headerTitle: "Patient",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5Icon name="hospital-user" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>

    )
}