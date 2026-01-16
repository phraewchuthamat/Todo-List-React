import { useRef } from 'react'
import PropTypes from 'prop-types'
import { Calendar as CalendarIcon } from 'lucide-react'
import { formatDateDisplay } from '../../utils/formatDate'

export const Input = ({
    type = 'text',
    placeholder,
    value,
    onChange,
    className = '',
    ...props
}) => {
    const inputRef = useRef(null)
    const isDate = type === 'date'

    const handleOpenCalendar = () => {
        if (inputRef.current) {
            try {
                inputRef.current.showPicker()
            } catch (err) {
                console.error(err)
                inputRef.current.focus()
            }
        }
    }

    if (isDate) {
        return (
            <div className={`relative w-full ${className}`}>
                <div
                    onClick={handleOpenCalendar}
                    className={`
                        w-full 
                        border-2 border-black 
                        px-4 py-2 
                        bg-white 
                        flex items-center justify-between
                        text-lg font-medium
                        cursor-pointer
                        transition-shadow duration-200
                        hover:bg-gray-50
                        active:translate-y-[2px] 
                        active:shadow-none
                        ${value ? 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : ''}
                    `}
                >
                    <span className={value ? 'text-black' : 'text-gray-400'}>
                        {value
                            ? formatDateDisplay(value)
                            : placeholder || 'dd/mm/yyyy'}
                    </span>
                    <CalendarIcon
                        className="w-6 h-6 text-black"
                        strokeWidth={2.5}
                    />
                </div>

                <input
                    ref={inputRef}
                    type="date"
                    value={value}
                    onChange={onChange}
                    className="opacity-0 absolute bottom-0 left-0 w-0 h-0 -z-10"
                    {...props}
                />
            </div>
        )
    }

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

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    className: PropTypes.string,
}
