import { X, Check } from 'lucide-react'

export const AlertPopup = ({ alert, onClose }) => {
    if (!alert.isOpen) return null

    const typeStyles = {
        success: 'bg-[#A8DF8E] text-black',
        error: 'bg-[#FFAAB8] text-black',
        info: 'bg-[#FEEE91] text-black',
    }

    return (
        <div className="fixed top-6 right-6 z-50 animate-bounce-in">
            <div
                className={`
                        ${typeStyles[alert.type] || typeStyles.info}
                        border-2 border-black 
                        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                        min-w-[300px] p-4 flex justify-between items-center gap-4
                        transform transition-all duration-300
                        `}
            >
                <Check />
                <span className="font-bold text-lg">{alert.message}</span>
                <button
                    onClick={onClose}
                    className="p-1 hover:bg-black hover:text-white border-2 border-transparent hover:border-transparent rounded-none transition-colors"
                >
                    <span className="font-black font-mono">
                        <X />
                    </span>
                </button>
            </div>
        </div>
    )
}
