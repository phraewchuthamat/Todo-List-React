import PropTypes from 'prop-types'
import RetroHeart from '../RetroHeart'
import { Button } from '../ui/Button'
import { TEXT_CONFIG } from '../../config/contants'

export const TodoHeader = ({ activeTasksCount, onAddClick }) => {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl md:text-4xl font-bold font-display">
                        {TEXT_CONFIG.title}
                    </h1>
                    <RetroHeart className="mb-2 animate-pulse scale-75 md:scale-100 origin-bottom-left" />
                </div>
                <p className="text-gray-500 text-sm font-bold">
                    {TEXT_CONFIG.tasksLeft}{' '}
                    <span className="text-gray-500">{activeTasksCount}</span>
                </p>
            </div>

            <Button
                onClick={onAddClick}
                className="w-full sm:w-auto text-center"
            >
                {TEXT_CONFIG.addTaskBtn}
            </Button>
        </div>
    )
}

TodoHeader.propTypes = {
    activeTasksCount: PropTypes.number.isRequired,
    onAddClick: PropTypes.func.isRequired,
}
