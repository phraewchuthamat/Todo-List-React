export const getTodayString = () => {
    return new Date().toISOString().split('T')[0]
}
