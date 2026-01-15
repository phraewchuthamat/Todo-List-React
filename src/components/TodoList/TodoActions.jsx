import PropTypes from 'prop-types'
import { SquarePen, Trash } from 'lucide-react'
import { IconButton } from '../ui/IconButton'

export const TodoActions = ({ onEdit, onDelete }) => {
    return (
        <div className="absolute top-4 right-4 flex gap-2">
            <IconButton onClick={onEdit} color="info" title="Edit Task">
                <SquarePen className="w-5 h-5" />
            </IconButton>

            <IconButton onClick={onDelete} color="danger" title="Delete Task">
                <Trash className="w-5 h-5" />
            </IconButton>
        </div>
    )
}

TodoActions.propTypes = {
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}
