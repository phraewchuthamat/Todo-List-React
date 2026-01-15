import PropTypes from 'prop-types'

export const Card = ({
    children,
    className = '',
    hoverEffect = false,
    onClick,
    ...props
}) => {
    return (
        <div
            onClick={onClick}
            className={`
                border-2 border-black 
                p-4 
                relative 
                bg-white
                transition-all duration-200 
                
                ${
                    hoverEffect
                        ? 'hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 cursor-pointer'
                        : ''
                }
                
                ${className}
            `}
            {...props}
        >
            {children}
        </div>
    )
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    hoverEffect: PropTypes.bool,
    onClick: PropTypes.func,
}
