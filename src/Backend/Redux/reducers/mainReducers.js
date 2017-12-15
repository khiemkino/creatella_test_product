import createReducer from '../lib/reducerConfig'
import key from '../lib/constants'
import init from '../lib/initState'

/**
 * NAME: Main REDUCERS
 * CREATOR: KHIEM
 *  Set reducers for Main DATA IN REDUX
 */

// SET REDUCER for internet
export const internetData = createReducer(init.internetInit, {
  [key.SET_INTERNET] (state, action) {
    return action.payload
  }
})

export const advertisement = createReducer(init.adsInit, {
  [key.SET_ADVERTISEMENT] (state, action) {
    return action.payload
  }
})
