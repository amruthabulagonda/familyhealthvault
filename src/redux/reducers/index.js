// combineReducers come from redux that used for combining reducers that we just made.
import { combineReducers } from 'redux'

// Reducers
import formreducer from './formreducer'

export default combineReducers({
	formreducer,
	// Here you can registering another reducers.
})