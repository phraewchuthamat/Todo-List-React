import { useState } from 'react'
import { getTodayString } from '../utils/formatDate'

export const TodoForm = ({ initialData, onSubmit, onCancel }) => {
    const defaultState = { name: '', description: '', dueDate: '' }
    const [formData, setFormData] = useState(defaultState)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(formData)
    }

    return (
        <section className="animate-in fade-in duration-300">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold">
                    {initialData ? 'Edit Task' : 'Add Task'}
                </h1>
                <button
                    type="button"
                    onClick={onCancel}
                    className="bg-accent border-2 border-black px-6 py-2 font-bold hover:bg-muted transition-colors"
                >
                    Backward
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block font-bold">Title *</label>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border-2 border-black p-3 outline-none"
                        required
                        placeholder="What needs to be done?"
                    />
                </div>
                <div>
                    <label className="block font-bold">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full border-2 border-black p-3 outline-none"
                        rows="3"
                        placeholder="Add details..."
                    />
                </div>
                <div>
                    <label className="block font-bold">Due Date *</label>
                    <input
                        type="date"
                        name="dueDate"
                        min={getTodayString()}
                        value={formData.dueDate}
                        onChange={handleChange}
                        className="w-full border-2 border-black p-3 outline-none"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-secondary border-2 border-black py-4 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 transition-all"
                >
                    {initialData ? 'Update Task' : 'Create Task'}
                </button>
            </form>
        </section>
    )
}
