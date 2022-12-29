import { styleFn }                     from 'styled-system'
import { switchProp }                  from 'styled-tools'
import { prop }                        from 'styled-tools'

import { getNormalSizeStyles }         from './abstract'
import { getSmallSizeStyles }          from './abstract'
import { getSmallSecondarySizeStyles } from './abstract'

const getShapeStyles = (theme): styleFn => {
  const normalSizeStyles = getNormalSizeStyles(theme)
  const smallSizeStyles = getSmallSizeStyles(theme)
  const smallSecondarySizeStyles = getSmallSecondarySizeStyles(theme)

  return switchProp(prop('sizes', 'normal'), {
    normal: normalSizeStyles,
    small: smallSizeStyles,
    smallSecondary: smallSecondarySizeStyles,
  })
}

export { getShapeStyles }
