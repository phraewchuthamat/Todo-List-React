export const formatDateDisplay = (dateString) => {
    if (!dateString) return null

    const [year, month, day] = dateString.split('-')

    return `${day}/${month}/${year}`
}

export const getTodayString = () => {
    return new Date().toISOString().split('T')[0]
}
