// src/hooks/useTodo.js
import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { useData } from './useData'

export const useTodo = () => {
    // --- 1. State Management (Data) ---
    const [tasks, setTasks] = useLocalStorage('Todo-List', useData)

    // --- 2. UI State (Control View) ---
    const [isCreating, setIsCreating] = useState(false)
    const [editingId, setEditingId] = useState(null)
    const [isConfirmOpen, setIsConfirmOpen] = useState(false)
    const [targetId, setTargetId] = useState(null)

    // --- 3. Form State ---
    const initialFormState = { name: '', description: '', dueDate: '' }
    const [formData, setFormData] = useState(initialFormState)

    // --- 4. Helpers ---
    const getTodayString = () => new Date().toISOString().split('T')[0]

    // --- 5. Actions (Business Logic) ---

    // Handle Input Change
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    // Open/Close Actions
    const openAddMode = () => {
        setFormData(initialFormState)
        setEditingId(null)
        setIsCreating(true)
    }

    const openEditMode = (todo) => {
        setFormData({
            name: todo.name,
            description: todo.description,
            dueDate: todo.dueDate,
        })
        setEditingId(todo.id)
        setIsCreating(true)
    }

    const closeForm = () => {
        setFormData(initialFormState)
        setEditingId(null)
        setIsCreating(false)
    }

    // CRUD Operations
    const saveTask = (e) => {
        e.preventDefault()

        // Validation Logic
        if (formData.dueDate < getTodayString()) {
            alert('ไม่สามารถกำหนดวันย้อนหลังได้')
            return
        }

        if (editingId) {
            // Update
            setTasks(
                tasks.map((task) =>
                    task.id === editingId ? { ...task, ...formData } : task
                )
            )
        } else {
            // Create
            const newTask = { ...formData, id: Date.now(), completed: false }
            setTasks([...tasks, newTask])
        }
        closeForm()
    }

    const toggleComplete = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        )
    }

    const openDeleteDialog = (id) => {
        setTargetId(id)
        setIsConfirmOpen(true)
    }

    const confirmDelete = () => {
        setTasks(tasks.filter((task) => task.id !== targetId))
        setIsConfirmOpen(false)
        setTargetId(null)
    }

    const cancelDelete = () => {
        setIsConfirmOpen(false)
        setTargetId(null)
    }

    // --- Return Interface (Public API) ---
    // ส่งออกเฉพาะสิ่งที่ Component จำเป็นต้องใช้
    return {
        // Data
        tasks,
        formData,
        getTodayString,

        // UI State
        isCreating,
        editingId,
        isConfirmOpen,

        // Actions
        handleInputChange,
        openAddMode,
        openEditMode,
        closeForm,
        saveTask,
        toggleComplete,
        openDeleteDialog,
        confirmDelete,
        cancelDelete,
    }
}
