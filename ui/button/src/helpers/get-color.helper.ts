import { Variant } from './color.interface'

const getColor = (variant: Variant, hover: boolean, pressed: boolean) => {
  if (variant === 'red') {
    if (!hover && !pressed) return 'redMain'
    if (hover && !pressed) return 'redDark'
    if (hover && pressed) return 'redDark'
  }

  return 'black'
}

export { getColor }
