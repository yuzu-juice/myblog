const JST_OFFSET_MS = 9 * 60 * 60 * 1000

const toJst = (date: Date) => new Date(date.getTime() + JST_OFFSET_MS)

const jstYearMonth = (date: Date) => {
    const jst = toJst(date)
    return jst.getUTCFullYear() * 100 + (jst.getUTCMonth() + 1)
}

export const formatDate = (date: Date) => {
    return date.toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'Asia/Tokyo'
    })
}

export const formatMonth = (value: string | Date) => {
    if (value instanceof Date) {
        const jst = toJst(value)
        return `${jst.getUTCFullYear()}/${String(jst.getUTCMonth() + 1).padStart(2, '0')}`
    }
    return value.split('-').slice(0, 2).join('/')
}

export const getYear = (value: string) => value.slice(0, 4)

export const getMonthNumber = (value: string) => Number(value.slice(5, 7))

export const isExpiredMonth = (date: Date) => jstYearMonth(date) < jstYearMonth(new Date())
