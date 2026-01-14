import { useState } from 'react'
import { useTodo } from '../hooks/useTodo'
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'
import { useAlert } from '../hooks/useAlert'

export default function TodoModal() {
    const { tasks, createTask, updateTask, deleteTask, toggleComplete } =
        useTodo()
    const { showAlert } = useAlert()

    const [view, setView] = useState('LIST')
    const [editingId, setEditingId] = useState(null)

    const [isConfirmOpen, setIsConfirmOpen] = useState(false)
    const [targetDeleteId, setTargetDeleteId] = useState(null)

    const handleSave = (formData) => {
        if (view === 'EDIT' && editingId) {
            updateTask(editingId, formData)
            showAlert('Update Task Success! ', 'success')
        } else {
            createTask(formData)
            showAlert('New Task Created! ', 'success')
        }
        setView('LIST')
        setEditingId(null)
    }

    const handleEditClick = (todo) => {
        setEditingId(todo.id)
        setView('EDIT')
    }

    const handleDeleteRequest = (id) => {
        setTargetDeleteId(id)
        setIsConfirmOpen(true)
    }

    const confirmDelete = () => {
        deleteTask(targetDeleteId)
        setIsConfirmOpen(false)
        setTargetDeleteId(null)
        showAlert('Task Deleted! ', 'error')
    }

    const editingTask = tasks.find((t) => t.id === editingId)

    return (
        <div className="min-h-screen bg-primary flex justify-center items-center p-4">
            <div className="w-full max-w-2xl bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
                {view === 'LIST' ? (
                    <TodoList
                        tasks={tasks}
                        onAddClick={() => setView('CREATE')}
                        onEditClick={handleEditClick}
                        onDeleteClick={handleDeleteRequest}
                        onToggleClick={toggleComplete}
                        isConfirmOpen={isConfirmOpen}
                        confirmDelete={confirmDelete}
                        cancelDelete={() => setIsConfirmOpen(false)}
                    />
                ) : (
                    <TodoForm
                        key={editingId ? editingId : 'create-form'}
                        initialData={view === 'EDIT' ? editingTask : null}
                        onSubmit={handleSave}
                        onCancel={() => {
                            setView('LIST')
                            setEditingId(null)
                        }}
                    />
                )}
            </div>
        </div>
    )
}
