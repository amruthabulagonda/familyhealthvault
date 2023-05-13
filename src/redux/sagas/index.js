import { spawn } from 'redux-saga/effects'

// Sagas
import formsaga from './formsaga'

// Export the root saga
export default function* rootSaga() {
	console.log("Hello From Redux-Saga!")
	
	yield spawn(formsaga)
}