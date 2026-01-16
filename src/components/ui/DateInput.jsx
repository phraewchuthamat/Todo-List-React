import { useRef } from 'react'
import PropTypes from 'prop-types'
import { Calendar as CalendarIcon } from 'lucide-react'
import { formatDateDisplay } from '../../utils/formatDate'

export const DateInput = ({
    value,
    onChange,
    placeholder,
    className = '',
    ...props
}) => {
    const inputRef = useRef(null)

    const handleContainerClick = () => {
        if (inputRef.current) {
            try {
                inputRef.current.showPicker()
            } catch (err) {
                console.log(err, 'Container Click Datedue Error:')
                inputRef.current.focus()
            }
        }
    }

    return (
        <div
            className={`relative w-full cursor-pointer ${className}`}
            onClick={handleContainerClick}
        >
            <div
                className={`
                    w-full 
                    border-2 border-black 
                    px-4 py-2 
                    bg-white 
                    flex items-center justify-between
                    text-lg font-medium
                    transition-shadow duration-200
                    pointer-events-none
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
                className="
                    absolute inset-0 
                    w-full h-full 
                    opacity-0 
                    z-10 
                    cursor-pointer
                "
                {...props}
            />
        </div>
    )
}

DateInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
}
