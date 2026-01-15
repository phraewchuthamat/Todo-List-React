import PropTypes from 'prop-types'
import { TodoItem } from './TodoItem'
import { TodoHeader } from './TodoHeader'
import ConfirmDialog from '../dialog/ConfirmDialog'
import { TEXT_CONFIG } from '../../config/contants'

export const TodoList = ({
    tasks = [],
    onAddClick,
    onEditClick,
    onDeleteClick,
    onToggleClick,
    isConfirmOpen,
    confirmDelete,
    cancelDelete,
}) => {
    const activeTasksCount = tasks.filter((t) => !t.completed).length
    const hasTasks = tasks.length > 0

    return (
        <section className="w-full max-w-2xl mx-auto">
            <TodoHeader
                activeTasksCount={activeTasksCount}
                onAddClick={onAddClick}
            />

            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {!hasTasks ? (
                    <div className="text-center py-10 border-2 border-dashed border-gray-300 rounded-lg">
                        <p className="text-gray-400 font-bold text-xl">
                            {TEXT_CONFIG.emptyState}
                        </p>
                    </div>
                ) : (
                    tasks.map(
                        (item) =>
                            item &&
                            item.id && (
                                <TodoItem
                                    key={item.id}
                                    todo={item}
                                    onDelete={() => onDeleteClick(item.id)}
                                    onToggle={onToggleClick}
                                    onEdit={onEditClick}
                                />
                            )
                    )
                )}
            </div>

            <ConfirmDialog
                isOpen={isConfirmOpen}
                title={TEXT_CONFIG.deleteTitle}
                message={TEXT_CONFIG.deleteMsg}
                onConfirm={confirmDelete}
                onCancel={cancelDelete}
            />
        </section>
    )
}

TodoList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
            text: PropTypes.string,
            completed: PropTypes.bool,
        })
    ),
    onAddClick: PropTypes.func.isRequired,
    onEditClick: PropTypes.func,
    onDeleteClick: PropTypes.func.isRequired,
    onToggleClick: PropTypes.func.isRequired,
    isConfirmOpen: PropTypes.bool,
    confirmDelete: PropTypes.func,
    cancelDelete: PropTypes.func,
}
