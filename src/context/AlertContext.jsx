import { createContext, useState, useCallback } from 'react'
import { AlertPopup } from '../components/alertPopup/AlertPopup'

const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState({
        isOpen: false,
        message: '',
        type: 'success',
    })

    const closeAlert = useCallback(() => {
        setAlert((prev) => ({ ...prev, isOpen: false }))
    }, [])

    const showAlert = useCallback(
        (message, type = 'success', duration = 3000) => {
            setAlert({ isOpen: true, message, type })

            if (duration > 0) {
                setTimeout(() => {
                    closeAlert()
                }, duration)
            }
        },
        [closeAlert]
    )

    return (
        <AlertContext.Provider value={{ alert, closeAlert, showAlert }}>
            {children}
            <AlertPopup alert={alert} onClose={closeAlert} />
        </AlertContext.Provider>
    )
}

export { AlertContext }
