import PropTypes from 'prop-types'

export const Textarea = ({
    value,
    onChange,
    placeholder,
    className = '',
    ...props
}) => {
    return (
        <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`
                w-full 
                min-h-[120px]
                border-2 border-black 
                px-4 py-3
                text-lg font-medium 
                bg-white 
                focus:outline-none 
                focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                transition-shadow duration-200
                placeholder:text-gray-400
                resize-none
                ${className}
            `}
            {...props}
        />
    )
}

Textarea.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    className: PropTypes.string,
}
