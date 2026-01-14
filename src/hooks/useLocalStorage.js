import { useEffect, useState, useRef } from 'react'

export function useLocalStorage(key, initialValue) {
    const getStoredData = () => {
        try {
            const rawData = window.localStorage.getItem(key)
            if (!rawData) return initialValue

            const parsedData = JSON.parse(rawData)

            // ตรวจสอบว่ามีข้อมูลจริงหรือไม่ (ถ้าเป็น array ว่างให้ใช้ค่าเริ่มต้น)
            const isValidArray =
                Array.isArray(parsedData) && parsedData.length > 0
            return isValidArray ? parsedData : initialValue
        } catch (error) {
            console.error(`Error reading localStorage key "${key}":`, error)
            return initialValue
        }
    }

    const [storedValue, setStoredValue] = useState(getStoredData)
    const initialValueRef = useRef(initialValue)

    useEffect(() => {
        try {
            const isCurrentEmpty =
                Array.isArray(storedValue) && storedValue.length === 0
            const hasInitialData =
                Array.isArray(initialValueRef.current) &&
                initialValueRef.current.length > 0

            // กู้คืนค่าเริ่มต้นเฉพาะเมื่อข้อมูลปัจจุบันว่างแต่ค่าเริ่มต้นมีข้อมูล (ป้องกัน Loop)
            if (isCurrentEmpty && hasInitialData) {
                setStoredValue(initialValueRef.current)
                return
            }

            window.localStorage.setItem(key, JSON.stringify(storedValue))
        } catch (error) {
            console.error(`Error writing localStorage key "${key}":`, error)
        }
    }, [key, storedValue])

    return [storedValue, setStoredValue]
}
