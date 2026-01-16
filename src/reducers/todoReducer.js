export const TODO_ACTIONS = {
    CREATE: 'CREATE',
    DELETE: 'DELETE',
    UPDATE: 'UPDATE',
    TOGGLE: 'TOGGLE',
    SET: 'SET',
    INIT_DATA: 'INIT_DATA',
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case TODO_ACTIONS.INIT_DATA:
            return action.payload

        case TODO_ACTIONS.CREATE:
            return [...state, action.payload]

        case TODO_ACTIONS.DELETE:
            return state.filter((todo) => todo.id !== action.payload)

        case TODO_ACTIONS.UPDATE:
            return state.map((todo) =>
                todo.id === action.payload.id
                    ? { ...todo, ...action.payload }
                    : todo
            )

        case TODO_ACTIONS.TOGGLE:
            return state.map((t) =>
                t.id === action.payload ? { ...t, completed: !t.completed } : t
            )

        case TODO_ACTIONS.SET:
            return action.payload

        default:
            return state
    }
}
