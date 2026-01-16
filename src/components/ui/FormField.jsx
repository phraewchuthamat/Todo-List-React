import PropTypes from 'prop-types'
import { TextInput } from './TextInput'
import { DateInput } from './DateInput'
import { Textarea } from './Textarea'

export const FormField = ({
    label,
    type = 'text',
    className = '',
    ...props
}) => {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            <label className="font-bold text-lg">
                {label}{' '}
                {props.required && <span className="text-red-500">*</span>}
            </label>

            {type === 'date' ? (
                <DateInput type={type} {...props} />
            ) : type === 'textarea' ? (
                <Textarea type={type} {...props} />
            ) : (
                <TextInput type={type} {...props} />
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
