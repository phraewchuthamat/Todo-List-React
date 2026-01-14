import { TodoItem } from './TodoItem'
import ConfirmDialog from './ConfirmDialog'

export const TodoList = ({
    tasks,
    onAddClick,
    onEditClick,
    onDeleteClick,
    onToggleClick,
    isConfirmOpen,
    confirmDelete,
    cancelDelete,
}) => {
    const activeTasksCount = tasks.filter((t) => !t.completed).length

    return (
        <section>
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h1 className="text-4xl font-bold mb-4">To-Do List</h1>
                    <p className="text-gray-500 text-sm">
                        Tasks left: {activeTasksCount}
                    </p>
                </div>
                <button
                    onClick={onAddClick}
                    className="bg-secondary border-2 border-black px-6 py-2 font-bold hover:bg-primary transition-colors"
                >
                    Add Task
                </button>
            </div>

            <div className="space-y-4 max-h-120 overflow-y-auto pr-2">
                {tasks.map((item) => {
                    if (!item || !item.id) return null
                    return (
                        <TodoItem
                            key={item.id}
                            todo={item}
                            onDelete={() => onDeleteClick(item.id)}
                            onToggle={onToggleClick}
                            onEdit={onEditClick}
                        />
                    )
                })}

                <ConfirmDialog
                    isOpen={isConfirmOpen}
                    title="Delete Task?"
                    message="Are you sure you want to delete this task?"
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                />
            </div>
        </section>
    )
}
