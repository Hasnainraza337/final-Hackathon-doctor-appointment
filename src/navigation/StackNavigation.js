import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StartScreen1 from '../screens/Frontend/StartScreen1';
import StartScreen2 from '../screens/Frontend/StartScreen2';
import StartScreen3 from '../screens/Frontend/StartScreen3';
import TabNavigation from './TabNavigation';
import ProfileScreen1 from '../screens/Frontend/ProfileScreen1';
import Register from '../screens/Auth/Register';

const Stack = createStackNavigator();

export default function StackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="StartScreen1" component={StartScreen1} />
                <Stack.Screen name="StartScreen2" component={StartScreen2} />
                <Stack.Screen name="StartScreen3" component={StartScreen3} />
                <Stack.Screen name="ProfileScreen1" component={ProfileScreen1} />
                {/* <Stack.Screen name="Register" component={Register} /> */}
                <Stack.Screen name="HomeScreen" component={TabNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

