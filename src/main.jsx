import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TodoProvider } from './context/TodoContext.jsx'
import { AlertProvider } from './context/AlertContext.jsx'

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AlertProvider>
            <TodoProvider>
                <App />
            </TodoProvider>
        </AlertProvider>
    </React.StrictMode>
)
