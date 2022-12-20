const formattedNumber = (num: number): string => new Intl.NumberFormat('ru').format(num)

export { formattedNumber }
