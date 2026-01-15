import PropTypes from 'prop-types'

export const IconButton = ({
    children,
    onClick,
    color = 'default', // default, danger, info
    title,
    className = '',
}) => {
    // กำหนดสีตอน Hover ตามประเภทปุ่ม
    const colorVariants = {
        default: 'hover:bg-gray-200',
        danger: 'hover:bg-red-400 hover:text-white', // สำหรับปุ่มลบ
        info: 'hover:bg-blue-400 hover:text-white', // สำหรับปุ่มแก้ไข
        success: 'hover:bg-green-400 hover:text-black',
    }

    return (
        <button
            onClick={onClick}
            title={title}
            className={`
                p-2 
                border-2 border-transparent 
                transition-all duration-200 
                
                /* Neobrutalism Hover Effect */
                hover:border-black 
                hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] 
                hover:-translate-y-1 
                active:translate-y-0 active:shadow-none
                
                ${colorVariants[color] || colorVariants.default}
                ${className}
            `}
        >
            {children}
        </button>
    )
}

IconButton.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    color: PropTypes.oneOf(['default', 'danger', 'info', 'success']),
    title: PropTypes.string,
    className: PropTypes.string,
}
