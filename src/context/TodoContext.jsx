import { createContext, useReducer, useEffect, useState } from 'react'
import { TODO_ACTIONS, todoReducer } from '../reducers/todoReducer'
import { useData } from '../utils/useData'

const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)

    const [tasks, dispatch] = useReducer(todoReducer, [])

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true)

            await new Promise((resolve) => setTimeout(resolve, 1500))

            const localData = localStorage.getItem('Todo-List')

            let dataToLoad
            if (localData) {
                try {
                    dataToLoad = JSON.parse(localData)
                } catch (error) {
                    console.error('Error parsing data:', error)
                    dataToLoad = useData
                }
            } else {
                dataToLoad = useData
            }

            dispatch({ type: TODO_ACTIONS.INIT_DATA, payload: dataToLoad })
            setIsLoading(false)
        }

        loadData()
    }, [])

    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('Todo-List', JSON.stringify(tasks))
        }
    }, [tasks, isLoading])

    return (
        <TodoContext.Provider value={{ tasks, dispatch, isLoading }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext }
