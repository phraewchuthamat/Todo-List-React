import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { TODO_ACTIONS } from '../reducers/todoReducer'

export const useTodo = () => {
    const context = useContext(TodoContext)

    if (!context) {
        throw new Error('useTodo must be used within a TodoProvider')
    }

    const { tasks, dispatch } = context

    const createTask = (formData) => {
        const newTask = {
            ...formData,
            id: Date.now(),
            completed: false,
        }
        dispatch({ type: TODO_ACTIONS.CREATE, payload: newTask })
    }

    const deleteTask = (id) => {
        dispatch({ type: TODO_ACTIONS.DELETE, payload: id })
    }

    const updateTask = (id) => {
        dispatch({ type: TODO_ACTIONS.UPDATE, payload: id })
    }

    const toggleComplete = (id) => {
        dispatch({ type: TODO_ACTIONS.TOGGLE, payload: id })
    }

    return {
        tasks,
        createTask,
        deleteTask,
        updateTask,
        toggleComplete,
    }
}
