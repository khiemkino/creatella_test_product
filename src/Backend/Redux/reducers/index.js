import * as globalReducers from './globalReducers'
import * as mainReducers from './mainReducers'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  ...globalReducers,
  ...mainReducers
})

export default rootReducer
