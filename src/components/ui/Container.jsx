import PropTypes from 'prop-types'

export const Container = ({ children, className = '' }) => {
    return (
        <div className="min-h-screen bg-primary flex justify-center items-center p-4">
            <div
                className={`
                    w-full max-w-2xl 
                    bg-white 
                    border-2 border-black 
                    shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
                    p-8 
                    relative
                    ${className}
                `}
            >
                {children}
            </div>
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}
