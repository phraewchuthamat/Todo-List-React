import PropTypes from 'prop-types'

export const Button = ({
    children,
    onClick,
    type = 'button',
    className = '',
    variant = 'primary',
    ...props
}) => {
    const baseStyle =
        'border-2 border-black font-bold transition-all duration-200'

    const hoverEffect =
        'hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-none'

    const variants = {
        primary: 'bg-secondary hover:bg-primary text-black',
        danger: 'bg-red-400 hover:bg-red-500 text-white',
        outline: 'bg-white hover:bg-gray-100 text-black',
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`
                ${baseStyle} 
                ${hoverEffect} 
                ${variants[variant] || variants.primary} 
                px-6 py-2 
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    className: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'danger', 'outline']),
}
