import defaultAxios from 'axios'

const axios = defaultAxios.create({
  baseURL: 'localhost:8080/',
  headers: {'Content-Type': 'application/json'}
});
/* 
// Get All Todos
export const getAllTodos = async () => {
	try {
		const todos = await axios.get('todos?_limit=5')

		return todos.data
	} catch(err) {
		return console.error(err)
	}
} */

// Create New Record
export const createNewRecord= async (payload) => {
	try {
		const record = await axios.post('newrecord', {
			payload
		})

		return record.data
	} catch(err) {
		return console.error(err)
	}
}

// Delete existed todo
/* export const deleteExistedTodo = async (id) => {
	try {
		await axios.delete(`todos/${id}`)

		return id
	} catch(err) {
		return console.error(err)
	}
} */