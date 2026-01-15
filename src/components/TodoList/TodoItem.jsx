import PropTypes from 'prop-types'
import { Checkbox } from '../ui/Checkbox'
import { SquarePen, Trash } from 'lucide-react'
import { TodoActions } from './TodoActions'

export const TodoItem = ({ todo, onDelete, onToggle, onEdit }) => {
    const { id, name, dueDate, description, completed } = todo

    return (
        <div
            className={`border-2 border-black p-4 relative transition-colors ${
                completed ? 'bg-gray-100' : 'bg-primary/10'
            }`}
        >
            <div className="flex items-start gap-3">
                <Checkbox
                    checked={completed}
                    onChange={() => onToggle(id)}
                    className="mt-1"
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

            <TodoActions
                onEdit={() => onEdit(todo)}
                onDelete={() => onDelete(id)}
            />
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
        name: PropTypes.string.isRequired,
        dueDate: PropTypes.string,
        description: PropTypes.string,
        completed: PropTypes.bool,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
}
