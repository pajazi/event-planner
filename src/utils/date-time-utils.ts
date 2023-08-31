export const addDays = (date: Date, amount: number): Date =>
    new Date(new Date(date).getTime() + amount * 8.64e7) // 8.64e7 milliseconds in a day

export const subtractDays = (date: Date, amount: number): Date => addDays(date, -amount)

export const getStartOfDay = (date: Date): Date => {
    const startOfDay = new Date(date)
    startOfDay.setHours(0, 0, 0, 0)
    return startOfDay
}

export const getEndOfDay = (date: Date): Date => {
    const endOfDay = new Date(date)
    endOfDay.setHours(23, 59, 59)
    return endOfDay
}

export const areDatesEqual = (date1: Date, date2: Date): boolean =>
    date1?.getTime() === date2?.getTime()

// Initialize date in current timezone based on UTC value, without offset
export const fromUTCString = (data): Date => {
    if (!data) {
        return
    }

    const date = new Date(data)
    return new Date(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds(),
    )
}
