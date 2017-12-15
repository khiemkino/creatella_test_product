import { Actions, ActionConst } from 'react-native-router-flux'
import { setInternet } from '#/Redux/actions/mainActions'

/**
* NAME: handleConnectionChange
* PARAMS: isConnected
* Check change internet
*/
export const handleConnectionChange = (isConnected) => {
  return async (dispatch, getState) => {
    dispatch(setInternet(isConnected))
  }
}

/**
* NAME: handleChangeRoute
* Route to home screen
*/
export const handleChangeRoute = () => {
  return async (dispatch, getState) => {
    setTimeout(function () {
      Actions.homeScreen({type: ActionConst.RESET})
    }, 1000)
  }
}
