interface Variant {
  background: string
  color: string
}

const getVariant = (variant: string): Variant => {
  switch (variant) {
    case 'info':
      return {
        background: 'primary5',
        color: 'primary70',
      }
    case 'success':
      return {
        background: 'success5',
        color: 'success70',
      }
    case 'warning':
      return {
        background: 'warning5',
        color: 'warning70',
      }
    case 'error':
      return {
        background: 'error5',
        color: 'error70',
      }
    case 'loading':
      return {
        background: 'gray5',
        color: 'gray40',
      }

    default:
      return {
        background: 'primary5',
        color: 'primary70',
      }
  }
}

export { getVariant }
