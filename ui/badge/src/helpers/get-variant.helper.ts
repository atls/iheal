interface Variant {
  background: string
  color: string
}

const getVariant = (variant: string): Variant => {
  switch (variant) {
    case 'grayscale':
      return {
        background: 'grayscale6',
        color: 'grayscale4',
      }
    case 'purple':
      return {
        background: 'purpleAlpha012',
        color: 'purpleMain',
      }
    case 'blue':
      return {
        background: 'blueAlpha012',
        color: 'blueMain',
      }
    case 'yellow':
      return {
        background: 'yellowAlpha012',
        color: 'yellowMain',
      }
    case 'green':
      return {
        background: 'greenAlpha012',
        color: 'greenDark',
      }
    case 'red':
      return {
        background: 'redAlpha012',
        color: 'redDark',
      }

    default:
      return {
        background: 'grayscale6',
        color: 'grayscale4',
      }
  }
}

export { getVariant }
