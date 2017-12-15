import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

// Root action reducer
import rootReducer from '../reducers'

const middleWare = [thunkMiddleware]

if (process.env['NODE_ENV'] === 'development') {
  middleWare.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middleWare))

export default store
