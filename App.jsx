import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import StackNavigation from './src/navigation/StackNavigation';

export default function App() {

  useEffect(() => {
    SplashScreen.hide();

  })

  return (
    <>
      <StackNavigation />
    </>
  )
}