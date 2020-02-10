import { createStore, applyMiddleware } from 'redux'
import rootReducers from './reducers';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

export default createStore(rootReducers, applyMiddleware(...middleware));