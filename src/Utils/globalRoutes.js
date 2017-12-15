import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'

// Splash Screen
import SplashScreen from '~/Screen/SplashScreen'
// Home Screen
import HomeScreen from '~/Screen/HomeScreen'

const scenes = Actions.create(
  <Scene key="root" hideNavBar hideTabBar>
    {/* Main Page */}
    <Scene key="splashScreen" component={SplashScreen} initial={true}/>
    <Scene key="homeScreen" component={HomeScreen} />
  </Scene>
)

export default scenes
