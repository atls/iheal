import { Variant } from './color.interface'

const getColor = (variant: Variant, hover: boolean, pressed: boolean) => {
  if (variant === 'nav') {
    if (!hover && !pressed) return 'gray500'
    if (hover && !pressed) return 'primary500'
    if (hover && pressed) return 'primary600'
  }

  if (variant === 'tertiary') {
    if (!hover && !pressed) return 'primary500'
    if (hover && !pressed) return 'primary600'
    if (hover && pressed) return 'primary700'
  }

  if (variant === 'transparentRed') {
    if (!hover && !pressed) return 'error50'
    if (hover && !pressed) return 'error70'
    if (hover && pressed) return 'error70'
  }

  return 'gray500'
}

export { getColor }
