import { SquarePen, Trash } from 'lucide-react'

export const TodoItem = ({ todo, onDelete, onToggle, onEdit }) => {
    const { id, name, dueDate, description, completed } = todo

    return (
        <div
            className={`border-2 border-black p-4 relative transition-colors ${
                completed ? 'bg-gray-100' : 'bg-primary/10'
            }`}
        >
            <div className="flex items-start gap-3">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => onToggle(todo.id)}
                    className="mt-1.5 w-5 h-5 accent-secondary cursor-pointer shrink-0 border-2 border-black"
                />

                <div className="flex-1 min-w-0">
                    <h3
                        className={`font-bold text-lg leading-tight warp-break-words ${
                            completed ? 'line-through text-gray-400' : ''
                        }`}
                    >
                        {name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-tight mt-1 wrap-break-words">
                        {description}
                    </p>
                    <p className="text-accent font-bold mt-3 text-xs uppercase tracking-wider">
                        Due: {dueDate}
                    </p>
                </div>
            </div>

            <div className="absolute top-4 right-4 flex gap-2">
                <button
                    onClick={() => onEdit(todo)}
                    className="text-blue-600 hover:scale-125 transition-transform p-1"
                    title="Edit Task"
                >
                    <SquarePen className="w-5 h-5" />
                </button>
                <button
                    onClick={() => onDelete(id)}
                    className="text-red-500 hover:scale-125 transition-transform p-1"
                    title="Delete Task"
                >
                    <Trash className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}
