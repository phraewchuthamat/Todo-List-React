import PropTypes from 'prop-types'
import { X, CheckCircle2, AlertCircle, Info } from 'lucide-react'
import { IconButton } from '../ui/IconButton'

export const AlertPopup = ({ alert, onClose }) => {
    if (!alert.isOpen) return null

    const alertConfig = {
        success: {
            bgColor: 'bg-[#A8DF8E]',
            icon: <CheckCircle2 className="w-6 h-6" strokeWidth={3} />,
            textColor: 'text-black',
        },
        error: {
            bgColor: 'bg-[#FFAAB8]',
            icon: <AlertCircle className="w-6 h-6" strokeWidth={3} />,
            textColor: 'text-black',
        },
        info: {
            bgColor: 'bg-[#FEEE91]',
            icon: <Info className="w-6 h-6" strokeWidth={3} />,
            textColor: 'text-black',
        },
    }

    const currentStyle = alertConfig[alert.type] || alertConfig.info

    return (
        <div className="fixed top-6 right-6 z-[100] animate-in slide-in-from-top-2 fade-in duration-300">
            <div
                role="alert"
                className={`
                    ${currentStyle.bgColor} 
                    ${currentStyle.textColor}
                    border-2 border-black 
                    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                    min-w-[320px] 
                    p-4 
                    flex items-center gap-4
                `}
            >
                <div className="shrink-0">{currentStyle.icon}</div>

                <div className="flex-1 font-bold text-lg leading-tight">
                    {alert.message}
                </div>

                <div className="shrink-0">
                    <IconButton
                        onClick={onClose}
                        className="bg-transparent hover:bg-black hover:text-white border-transparent"
                        title="Close"
                    >
                        <X className="w-5 h-5" strokeWidth={3} />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

AlertPopup.propTypes = {
    alert: PropTypes.shape({
        isOpen: PropTypes.bool,
        type: PropTypes.oneOf(['success', 'error', 'info']),
        message: PropTypes.string,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
}
