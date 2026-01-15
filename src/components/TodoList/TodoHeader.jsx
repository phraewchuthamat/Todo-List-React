import PropTypes from 'prop-types'
import RetroHeart from '../RetroHeart'
import { Button } from '../ui/Button'
import { TEXT_CONFIG } from '../../config/contants'

export const TodoHeader = ({ activeTasksCount, onAddClick }) => {
    return (
        <div className="flex justify-between items-start mb-6">
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <h1 className="text-4xl font-bold font-display">
                        {TEXT_CONFIG.title}
                    </h1>
                    <RetroHeart className="mb-2 animate-pulse" />
                </div>
                <p className="text-gray-500 text-sm font-bold">
                    {TEXT_CONFIG.tasksLeft}
                    <span className="text-gray-500 ml-4">
                        {activeTasksCount}
                    </span>
                </p>
            </div>

            <Button onClick={onAddClick}>{TEXT_CONFIG.addTaskBtn}</Button>
        </div>
    )
}

TodoHeader.propTypes = {
    activeTasksCount: PropTypes.number.isRequired,
    onAddClick: PropTypes.func.isRequired,
}
