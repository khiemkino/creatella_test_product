import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

// Styles components
import styles from './styles'

// |------------------------------|
// |--- RENDER MAIN VIEW START ---|
// |------------------------------|
const rightActionHeader = (action) => action
const imgCart = require('*/Image/Cart.png')
const imgCartFull = require('*/Image/CartFull.png')

const CoreHeader = ({ title, headerStyle, leftAction, rightAction, rightIconStyle, isOrder, customView }) => (
  <View style={[styles.container, headerStyle]}>
    <View style={styles.coreStyle}>
      {
        customView
      }
      <View style={styles.txtTitleContainer}>
        <Text style={[styles.txtTitle]}>{title}</Text>
      </View>
      {
        rightAction &&
      <TouchableOpacity onPress={rightActionHeader(rightAction)}
        style={styles.iconHeaderRight}>{<Image style={rightIconStyle} source={isOrder ? imgCartFull : imgCart}/>}</TouchableOpacity>
      }
    </View>
  </View>
)

export default CoreHeader
