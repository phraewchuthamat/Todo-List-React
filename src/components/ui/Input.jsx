import PropTypes from 'prop-types'
import { Calendar as CalendarIcon } from 'lucide-react'

export const Input = ({
    type = 'text',
    placeholder,
    value,
    onChange,
    className = '',
    ...props
}) => {
    const isDate = type === 'date'

    return (
        <div className="relative w-full">
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
                    
                    min-w-0 
                    appearance-none 

                    ${isDate ? 'pr-12 cursor-pointer' : ''}
                    
                    [&::-webkit-calendar-picker-indicator]:opacity-0
                    [&::-webkit-calendar-picker-indicator]:absolute
                    [&::-webkit-calendar-picker-indicator]:inset-0
                    [&::-webkit-calendar-picker-indicator]:w-full
                    [&::-webkit-calendar-picker-indicator]:cursor-pointer
                    
                    ${className}
                `}
                {...props}
            />

            {isDate && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <CalendarIcon
                        className="w-6 h-6 text-black"
                        strokeWidth={2.5}
                    />
                </div>
            )}
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    className: PropTypes.string,
}
