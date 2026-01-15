import { useState } from 'react'
import { useTodo } from '../hooks/useTodo'
import { useAlert } from '../hooks/useAlert'
import { TodoList } from './TodoList/TodoList'
import { Container } from './ui/Container'
import ConfirmDialog from './dialog/ConfirmDialog'
import { TodoForm } from './TodoList/TodoForm'
import { LoadingScreen } from './ui/LoadingScreen'

const VIEW_MODE = {
    LIST: 'LIST',
    EDIT: 'EDIT',
    CREATE: 'CREATE',
}

export default function TodoApp() {
    // Custom Hooks
    const {
        tasks,
        isLoading,
        createTask,
        updateTask,
        deleteTask,
        toggleComplete,
    } = useTodo()
    const { showAlert } = useAlert()

    // Local State
    const [view, setView] = useState(VIEW_MODE.LIST)
    const [editingId, setEditingId] = useState(null)

    // Delete Logic State
    const [isConfirmOpen, setIsConfirmOpen] = useState(false)
    const [targetDeleteId, setTargetDeleteId] = useState(null)

    // Handlers
    const handleSave = (formData) => {
        if (view === VIEW_MODE.EDIT && editingId) {
            updateTask(editingId, formData)
            showAlert('Update Task Success! 🎉', 'success')
        } else {
            createTask(formData)
            showAlert('New Task Created! 🚀', 'success')
        }
        backToList()
    }

    const backToList = () => {
        setView(VIEW_MODE.LIST)
        setEditingId(null)
    }

    const handleEditClick = (todo) => {
        setEditingId(todo.id)
        setView(VIEW_MODE.EDIT)
    }

    const handleDeleteRequest = (id) => {
        setTargetDeleteId(id)
        setIsConfirmOpen(true)
    }

    const confirmDelete = () => {
        deleteTask(targetDeleteId)
        setIsConfirmOpen(false)
        setTargetDeleteId(null)
        showAlert('Task Deleted! 🗑️', 'error')
    }

    const editingTask = tasks.find((t) => t.id === editingId)

    return (
        <Container>
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <div className="animate-in fade-in duration-300">
                    {view === VIEW_MODE.LIST ? (
                        <TodoList
                            tasks={tasks}
                            onAddClick={() => setView(VIEW_MODE.CREATE)}
                            onEditClick={handleEditClick}
                            onDeleteClick={handleDeleteRequest}
                            onToggleClick={toggleComplete}
                        />
                    ) : (
                        <TodoForm
                            key={editingId ? editingId : 'create-form'}
                            initialData={
                                view === VIEW_MODE.EDIT ? editingTask : null
                            }
                            onSubmit={handleSave}
                            onCancel={backToList}
                        />
                    )}
                </div>
            )}

            <ConfirmDialog
                isOpen={isConfirmOpen}
                title="Delete Task?"
                message="Are you sure you want to delete this task? This action cannot be undone."
                onConfirm={confirmDelete}
                onCancel={() => setIsConfirmOpen(false)}
            />
        </Container>
    )
}
