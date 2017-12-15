import createReducer from '../lib/reducerConfig'
import key from '../lib/constants'
import init from '../lib/initState'

/**
 * NAME: GLOBAL REDUCERS
 * CREATOR: KHIEM
 *  Set reducers for GLOBAL DATA IN REDUX
 */

// SET REDUCER for Order Product
export const orderProduct = createReducer(init.orderProductInit, {
  [key.SET_ORDER_PRODUCT] (state, action) {
    return action.payload
  }
})
