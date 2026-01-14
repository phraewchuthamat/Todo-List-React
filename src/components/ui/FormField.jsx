export const FormField = ({
    label,
    type = 'text',
    error,
    className,
    ...props
}) => {
    const inputStyle =
        'w-full border-2 border-black p-3 outline-none focus:bg-gray-50 transition-colors'

    return (
        <div className={className}>
            {label && <label className="block font-bold mb-2">{label}</label>}

            {type === 'textarea' ? (
                <textarea className={inputStyle} rows="3" {...props} />
            ) : (
                <input type={type} className={inputStyle} {...props} />
            )}

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    )
}
