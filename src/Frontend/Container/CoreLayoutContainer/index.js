import React from 'react'
import { View, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native'
import gStyles from '@/globalStyles'
import CoreHeader from './CoreHeader'

class CoreLayoutContainer extends React.Component {
  dismissKeyboard () {
    Keyboard.dismiss()
  }

  get renderContent () {
    const { rightAction, children, style, title, headerStyle, leftAction, rightIconStyle, isOrder, customView } = this.props
    return (
      <View style={gStyles.backgroundDefault} >
        <CoreHeader customView={customView} isOrder={isOrder} rightIconStyle={rightIconStyle} title={title} headerStyle={headerStyle} rightAction={rightAction}
          leftAction={leftAction} />

        <View style={[gStyles.backgroundDefault, style]}>
          <StatusBar barStyle="light-content"/>
          {children}
        </View>
      </View>
    )
  }

  render () {
    const { isTouchDisable = false } = this.props
    return (
      isTouchDisable
        ? <TouchableWithoutFeedback onPress={this.dismissKeyboard}>
          {this.renderContent}
        </TouchableWithoutFeedback>
        : this.renderContent
    )
  }
}

export default CoreLayoutContainer
