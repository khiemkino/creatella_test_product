import React, { Component } from 'react'
import { Router } from 'react-native-router-flux'
import scenes from '@/globalRoutes'
import { Provider, connect } from 'react-redux'
import storeRedux from '#/Redux/store/configureStore'
import * as actions from '#/Redux/actions/globalActions'
import init from '#/Redux/lib/initState'
import { KEYSTORE } from '@/globalConstants'
import { checkLocalStoreToRedux } from '#/Redux/lib/reducerConfig'

const RouterWithRedux = connect()(Router)
export default class CreatellaProduct extends Component {
  render () {
    checkLocalStoreToRedux(storeRedux, KEYSTORE.ORDERPRODUCT, actions.setOrderProduct, init.orderProductInit)
    return (
      <Provider store={storeRedux}>
        <RouterWithRedux scenes={scenes}/>
      </Provider>
    )
  }
}
