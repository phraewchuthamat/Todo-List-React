import PropTypes from 'prop-types'
import { Input } from './Input'
import { Textarea } from './Textarea'

export const FormField = ({
    label,
    type = 'text',
    className = '',
    required,
    ...props
}) => {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {label && (
                <label className="font-bold text-lg">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}

            {type === 'textarea' ? (
                <Textarea {...props} />
            ) : (
                <Input type={type} {...props} />
            )}
        </div>
    )
}

FormField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    required: PropTypes.bool,
}
