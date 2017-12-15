import React from 'react'
import { Image, NetInfo } from 'react-native'

// Other Components
import styles from './styles'
import gStyles from '@/globalStyles'
import CoreLayoutContainer from '~/Container/CoreLayoutContainer'

/**
 * NAME: SPLASH SCREEN
 * CREATOR: KHIEM
 * Display Splash Screen
 */
const imgSplashScreen = require('*/Image/splashScreen.jpg')
export default class SplashScreen extends React.PureComponent {
  // ================START=================
  //    Start region for lifeCycle function
  // ======================================
  componentWillMount () {
    NetInfo.isConnected.addEventListener('connectionChange', this.props.handleConnectionChange)
  }

  async componentDidMount () {
    this.props.handleChangeRoute()
  }
  // ================END===================
  //    End region for lifeCycle function
  // ======================================

  // |------------------------------|
  // |--- RENDER MAIN VIEW START ---|
  // |------------------------------|
  render () {
    return (
      <CoreLayoutContainer headerStyle={styles.headerStyle}>
        <Image source={imgSplashScreen} style={gStyles.backgroundImage} />
      </CoreLayoutContainer>
    )
  }
}
