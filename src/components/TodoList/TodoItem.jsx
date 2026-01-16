import PropTypes from 'prop-types'
import { Card } from '../ui/Card'
import { Checkbox } from '../ui/Checkbox'
import { TodoActions } from './TodoActions'
import { formatDateDisplay } from '../../utils/formatDate'

export const TodoItem = ({ todo, onDelete, onToggle, onEdit }) => {
    const { id, name, dueDate, description, completed } = todo

    return (
        <Card
            className={completed ? 'bg-gray-100 opacity-75' : 'bg-white'}
            hoverEffect={!completed}
        >
            <div className="flex items-start gap-3 md:gap-4">
                <Checkbox
                    checked={completed}
                    onChange={() => onToggle(id)}
                    className="mt-1 shrink-0"
                />

                <div className="flex-1 min-w-0 pr-20">
                    <h3
                        className={`
                            font-bold text-base md:text-lg leading-tight break-words transition-colors
                            ${
                                completed
                                    ? 'line-through text-gray-500'
                                    : 'text-black'
                            }
                        `}
                    >
                        {name}
                    </h3>

                    {description && (
                        <p
                            className={`text-xs md:text-sm leading-tight mt-1 break-words ${
                                completed ? 'text-gray-400' : 'text-gray-500'
                            }`}
                        >
                            {description}
                        </p>
                    )}

                    <p
                        className={`font-bold mt-2 text-[10px] md:text-xs uppercase tracking-wider ${
                            completed ? 'text-gray-400' : 'text-accent'
                        }`}
                    >
                        Due: {formatDateDisplay(dueDate)}
                    </p>
                </div>
            </div>

            <TodoActions
                onEdit={() => onEdit(todo)}
                onDelete={() => onDelete(id)}
            />
        </Card>
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
