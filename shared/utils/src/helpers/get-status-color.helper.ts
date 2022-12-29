const getStatusColor = (status: string) => {
  switch (status) {
    case 'Новый':
      return 'purple'
    case 'В работе':
      return 'blue'
    case 'Готово':
      return 'green'
    case 'Ожидание':
      return 'yellow'
    case 'Отказ':
      return 'red'
    case 'Закрыт':
      return 'grayscale'
    default:
      return 'grayscale'
  }
}

export { getStatusColor }
