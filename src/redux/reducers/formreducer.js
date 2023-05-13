import { 
	SET_LOADING,
  RECORD_FORM_REQUEST,
  RECORD_FORM_SUCCESS,
  RECORD_FORM_FAILURE,
} from '../actions/formaction'

// Define your state here
const initialState = {
	  submitting: false,
    submitted: false,
    error: null,
    formData: {},
    loading:false
}

// This export default will control your state for your application
export default(state = initialState, {type, payload}) => {
	switch(type) {
		// Set loading
		case SET_LOADING:
			return {
				...state,
				loading: true
			}
		// Get todos
/* 		case GET_TODOS:
			return {
				...state,
				todos: payload,
				loading: false
			}
		// Set todo title from user that gonna input a title in form
		case SET_TODO_TITLE:
			return {
				...state,
				title: payload
			} */
		// Create new form request
		case RECORD_FORM_REQUEST:
			return {
				...state,
				formData: [payload, ...state.formData],
				loading: false
			}
    case RECORD_FORM_SUCCESS:
      return {
        ...state,
        submitting: false,
        submitted: true,
        loading:false
      };
    case RECORD_FORM_FAILURE:
      return {
         ...state,
        submitting: false,
        error: payload,
        loading:false
      };
		// Delete existed todo
/* 		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== payload),
				loading: false
			} */
		// Return default state if you didn't match any case
		default:
			return state
	}
}