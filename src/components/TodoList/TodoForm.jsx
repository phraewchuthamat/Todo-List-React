import { useState } from 'react'
import PropTypes from 'prop-types'
import { getTodayString } from '../../utils/formatDate'
import { FormField } from '../ui/FormField'
import { Button } from '../ui/Button'

export const TodoForm = ({ initialData, onSubmit, onCancel }) => {
    const defaultState = { name: '', description: '', dueDate: '' }
    const [formData, setFormData] = useState(initialData || defaultState)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(formData)
    }

    const isFormValid =
        formData.name.trim().length > 0 && formData.dueDate !== ''

    return (
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Header Section */}
            <div className="flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <h1 className="text-3xl md:text-4xl font-bold font-display">
                    {initialData ? 'Edit Task' : 'New Task'}
                </h1>

                <Button
                    type="button"
                    onClick={onCancel}
                    variant="outline"
                    className="self-end sm:self-auto"
                >
                    Back
                </Button>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <FormField
                    label="Title"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="What needs to be done?"
                    required
                    autoFocus
                />

                <FormField
                    label="Description"
                    type="textarea"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Add details (optional)..."
                />

                <FormField
                    label="Due Date"
                    type="date"
                    name="dueDate"
                    min={getTodayString()}
                    value={formData.dueDate}
                    onChange={handleChange}
                    required
                />

                {/* Submit Button */}
                <div className="pt-4">
                    <Button
                        type="submit"
                        variant="primary"
                        disabled={!isFormValid}
                        className={`w-full text-lg py-3 ${
                            !isFormValid ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    >
                        {initialData ? 'Update Task' : 'Create Task'}
                    </Button>
                </div>
            </form>
        </section>
    )
}

TodoForm.propTypes = {
    initialData: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        dueDate: PropTypes.string,
    }),
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
}
