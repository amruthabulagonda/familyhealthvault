// Import the redux-saga/effects
import {
  put,
  call,
  takeLatest,
  takeEvery
} from 'redux-saga/effects'

// Import all actions and api's
import {
  RECORD_FORM_REQUEST,
  RECORD_FORM_SUCCESS,
  RECORD_FORM_FAILURE,
  SET_LOADING
} from '../actions/formaction'

// Import all api's
import {
  createNewRecord
} from '../api/formapi'

// Here's the unique part, generator function*, function with asterisk(*)

/* // Get Todos
function* getTodos() {
  yield put({ type: SET_LOADING })

  const todos = yield call(getAllTodos)

  yield put({ type: GET_TODOS, payload: todos })
}

// Set the title of todo
function* setTodoTitle({ payload }) {
  yield put({ type: SET_TODO_TITLE, payload })
}
 */
// Create From
function* createForm({ payload }) {
  try{
    yield put({ type: SET_LOADING })
    yield call(createNewRecord, payload)
    yield put({ type: RECORD_FORM_SUCCESS })
  }catch(error){
    yield put({type: RECORD_FORM_FAILURE})
  }

}

// Delete todo
/* function* deleteTodo({ payload }) {
  yield put({ type: SET_LOADING })

  const todo = yield call(deleteExistedTodo, payload)

  yield put({ type: DELETE_TODO, payload: todo })
} */

// Export the saga (todo-saga)
export default function* formsaga() {
  yield takeLatest(RECORD_FORM_REQUEST, createForm)
}