import { createContext, useReducer, useEffect } from 'react'
import { todoReducer } from '../reducers/todoReducer'
import { useData } from '../utils/useData'

const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
    const initTodos = () => {
        const localData = localStorage.getItem('Todo-List')
        return localData ? JSON.parse(localData) : useData
    }

    const [tasks, dispatch] = useReducer(todoReducer, [], initTodos)

    useEffect(() => {
        localStorage.setItem('Todo-List', JSON.stringify(tasks))
    }, [tasks])

    return (
        <TodoContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext }
