import key from '../lib/constants'

/**
 * NAME: MAIN ACTIONS
 * CREATOR: KHIEM
 */

// SET Internet Data for application
export function setInternet (internet) {
  return {
    type: key.SET_INTERNET,
    payload: internet
  }
}

export function setAdvertisement (ads) {
  return {
    type: key.SET_ADVERTISEMENT,
    payload: ads
  }
}
