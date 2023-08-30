export const formatDateFilter = (date): string => {
    const dt = new Date(date)
    const year = dt.getFullYear()
    const month = `${dt.getMonth() + 1}`.padStart(2, '0')
    const dayOfTheMonth = `${dt.getDate()}`.padStart(2, '0')
    return `${year}-${month}-${dayOfTheMonth}`
}
