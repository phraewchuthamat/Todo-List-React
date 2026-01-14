// src/components/TodoModal.jsx
import { TodoItem } from './TodoItem'
import ConfirmDialog from './ConfirmDialog'
import { useTodo } from '../hooks/useTodo' // Import สมองที่เราสร้างไว้

const TodoModal = () => {
    const {
        tasks,
        formData,
        isCreating,
        editingId,
        isConfirmOpen,
        getTodayString,
        handleInputChange,
        openAddMode,
        openEditMode,
        closeForm,
        saveTask,
        toggleComplete,
        openDeleteDialog,
        confirmDelete,
        cancelDelete,
    } = useTodo()

    return (
        <div className="min-h-screen bg-primary flex justify-center items-center p-4">
            <div className="w-full max-w-2xl bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
                {!isCreating ? (
                    // --- View Mode ---
                    <section>
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h1 className="text-4xl font-bold mb-4">
                                    To-Do List
                                </h1>
                                <p className="text-gray-500 text-sm">
                                    You have{' '}
                                    {
                                        tasks.filter((item) => !item.completed)
                                            .length
                                    }{' '}
                                    tasks left!
                                </p>
                            </div>
                            <button
                                onClick={openAddMode}
                                className="bg-secondary border-2 border-black px-6 py-2 font-bold hover:bg-primary transition-colors"
                            >
                                Add Task
                            </button>
                        </div>

                        <div className="space-y-4 max-h-120 overflow-y-auto pr-2">
                            {tasks.map((item) => (
                                <TodoItem
                                    key={item.id}
                                    todo={item}
                                    onDelete={() => openDeleteDialog(item.id)}
                                    onToggle={toggleComplete}
                                    onEdit={openEditMode}
                                />
                            ))}

                            <ConfirmDialog
                                isOpen={isConfirmOpen}
                                title="Are you sure?"
                                message="Do you want delete item."
                                onConfirm={confirmDelete}
                                onCancel={cancelDelete}
                            />
                        </div>
                    </section>
                ) : (
                    // --- Form Mode ---
                    <section className="animate-in fade-in duration-300">
                        <div className="flex justify-between items-center mb-8">
                            <h1 className="text-4xl font-bold">
                                {editingId ? 'Edit Task' : 'Add Task'}
                            </h1>
                            <button
                                onClick={closeForm}
                                className=" bg-accent border-2 border-black px-6 py-2 font-bold hover:bg-muted transition-colors"
                            >
                                Backward
                            </button>
                        </div>

                        <form onSubmit={saveTask} className="space-y-6">
                            <div>
                                <label className="block font-bold">
                                    Title *
                                </label>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full border-2 border-black p-3 outline-none"
                                    placeholder="Enter your todo name..."
                                    required
                                />
                            </div>
                            <div>
                                <label className="block font-bold">
                                    Description *
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    className="w-full border-2 border-black p-3 outline-none"
                                    rows="3"
                                    placeholder="Description"
                                />
                            </div>
                            <div>
                                <label className="block font-bold">
                                    Due Date *
                                </label>
                                <input
                                    type="date"
                                    name="dueDate"
                                    min={getTodayString()} // Logic นี้เรียกผ่าน Hook ได้เลย
                                    value={formData.dueDate}
                                    onChange={handleInputChange}
                                    className="w-full border-2 border-black p-3 outline-none"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-secondary border-2 border-black py-4 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 transition-all"
                            >
                                {editingId ? 'Update Task' : 'Add Task'}
                            </button>
                        </form>
                    </section>
                )}
            </div>
        </div>
    )
}

export default TodoModal
