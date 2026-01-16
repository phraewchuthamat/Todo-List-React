import { useState, useMemo, useCallback } from 'react'
import { useTodo } from '../hooks/useTodo'
import { useAlert } from '../hooks/useAlert'
import { TodoList } from './TodoList/TodoList'
import { Container } from './ui/Container'
import ConfirmDialog from './dialog/ConfirmDialog'
import { TodoForm } from './TodoList/TodoForm'
import { LoadingScreen } from './ui/LoadingScreen'
import { AlertPopup } from './alertPopup/AlertPopup'

const VIEW_MODE = {
    LIST: 'LIST',
    EDIT: 'EDIT',
    CREATE: 'CREATE',
}

export default function TodoApp() {
    const {
        tasks,
        isLoading,
        createTask,
        updateTask,
        deleteTask,
        toggleComplete,
    } = useTodo()
    const { alert, showAlert, closeAlert } = useAlert()

    const [view, setView] = useState(VIEW_MODE.LIST)
    const [editingId, setEditingId] = useState(null)
    const [isConfirmOpen, setIsConfirmOpen] = useState(false)
    const [targetDeleteId, setTargetDeleteId] = useState(null)

    const backToList = useCallback(() => {
        setView(VIEW_MODE.LIST)
        setEditingId(null)
    }, [])

    const handleSave = useCallback(
        (formData) => {
            if (view === VIEW_MODE.EDIT && editingId) {
                updateTask(editingId, formData)
                showAlert('Update Task Success! 🎉', 'success')
            } else {
                createTask(formData)
                showAlert('New Task Created! 🚀', 'success')
            }

            setView(VIEW_MODE.LIST)
            setEditingId(null)
        },
        [view, editingId, updateTask, createTask, showAlert]
    )

    const handleEditClick = useCallback((todo) => {
        setEditingId(todo.id)
        setView(VIEW_MODE.EDIT)
    }, [])

    const handleDeleteRequest = useCallback((id) => {
        setTargetDeleteId(id)
        setIsConfirmOpen(true)
    }, [])

    const confirmDelete = useCallback(() => {
        if (targetDeleteId) {
            deleteTask(targetDeleteId)
            showAlert('Task Deleted! 🗑️', 'error')
        }
        setIsConfirmOpen(false)
        setTargetDeleteId(null)
    }, [targetDeleteId, deleteTask, showAlert])

    const activeTasksCount = tasks.filter((t) => !t.completed).length

    const editingTask = useMemo(() => {
        return view === VIEW_MODE.EDIT
            ? tasks.find((t) => t.id === editingId)
            : null
    }, [view, tasks, editingId])

    return (
        <Container>
            <AlertPopup alert={alert} onClose={closeAlert} />

            {isLoading ? (
                <LoadingScreen />
            ) : (
                <div className="animate-in fade-in duration-300">
                    {view === VIEW_MODE.LIST ? (
                        <TodoList
                            tasks={tasks}
                            activeTasksCount={activeTasksCount}
                            onAddClick={() => setView(VIEW_MODE.CREATE)}
                            onEditClick={handleEditClick}
                            onDeleteClick={handleDeleteRequest}
                            onToggleClick={toggleComplete}
                        />
                    ) : (
                        <TodoForm
                            key={editingId || 'create'}
                            initialData={editingTask}
                            onSubmit={handleSave}
                            onCancel={backToList}
                        />
                    )}
                </div>
            )}

            <ConfirmDialog
                isOpen={isConfirmOpen}
                title="Delete Task?"
                message="Are you sure? It's gone forever."
                onConfirm={confirmDelete}
                onCancel={() => setIsConfirmOpen(false)}
            />
        </Container>
    )
}
