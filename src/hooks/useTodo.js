import { useContext, useCallback } from 'react'
import { TodoContext } from '../context/TodoContext'
import { TODO_ACTIONS } from '../reducers/todoReducer'

export const useTodo = () => {
    const context = useContext(TodoContext)

    if (!context) {
        throw new Error('useTodo must be used within a TodoProvider')
    }

    const { tasks, dispatch, isLoading } = context

    const createTask = useCallback(
        (formData) => {
            const newTask = {
                ...formData,
                id: Date.now(),
                completed: false,
            }
            dispatch({ type: TODO_ACTIONS.CREATE, payload: newTask })
        },
        [dispatch]
    )

    const deleteTask = useCallback(
        (id) => {
            dispatch({ type: TODO_ACTIONS.DELETE, payload: id })
        },
        [dispatch]
    )

    const updateTask = useCallback(
        (id, updatedData) => {
            dispatch({
                type: TODO_ACTIONS.UPDATE,
                payload: { id, ...updatedData },
            })
        },
        [dispatch]
    )

    const toggleComplete = useCallback(
        (id) => {
            dispatch({ type: TODO_ACTIONS.TOGGLE, payload: id })
        },
        [dispatch]
    )

    return {
        tasks,
        isLoading,
        createTask,
        deleteTask,
        updateTask,
        toggleComplete,
    }
}
