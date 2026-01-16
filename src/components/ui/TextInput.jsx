import PropTypes from 'prop-types'

export const TextInput = ({
    type = 'text',
    placeholder,
    value,
    onChange,
    className = '',
    ...props
}) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`
                w-full 
                border-2 border-black 
                px-4 py-2 
                text-lg font-medium 
                bg-white 
                focus:outline-none 
                focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                transition-shadow duration-200
                placeholder:text-gray-400
                ${className}
            `}
            {...props}
        />
    )
}

TextInput.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    className: PropTypes.string,
}
