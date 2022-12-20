import { DateTime } from 'luxon'

const formattedDate = (variant: string, date: Date): string => {
  const date1 = DateTime.fromISO(date.toISOString())
  const currentTime = DateTime.fromJSDate(new Date())

  const diff = date1.diff(currentTime, ['minutes', 'seconds'])

  if (variant === 'diffTime') return diff.toFormat('mm:ss')

  if (variant === 'fullYear')
    return DateTime.fromJSDate(date).setLocale('ru').toFormat('dd.LL.yyyy')

  if (variant === 'time') return DateTime.fromJSDate(date).setLocale('ru').toFormat('hh:mm')

  if (variant === 'plusMonth')
    return DateTime.fromJSDate(date).setLocale('ru').plus({ months: 1 }).toFormat('dd.LL.yyyy')

  return DateTime.fromJSDate(date).setLocale('ru').toFormat('dd.LL.yyyy')
}

export { formattedDate }
