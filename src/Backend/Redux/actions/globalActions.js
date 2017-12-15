import key from '../lib/constants'
import { checkStore } from '../lib/reducerConfig'
import { KEYSTORE } from '@/globalConstants'
/**
 * NAME: GLOBAL ACTIONS
 * CREATOR: KHIEM
 *  Set actions for GLOBAL DATA IN REDUX
 */

// SET DATA for Card Wallet
export function setOrderProduct (orderProduct) {
  checkStore(orderProduct, KEYSTORE.ORDERPRODUCT)
  return {
    type: key.SET_ORDER_PRODUCT,
    payload: orderProduct
  }
}
