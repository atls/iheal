import { styleFn }             from 'styled-system'
import { switchProp }          from 'styled-tools'
import { prop }                from 'styled-tools'

import { getNormalSizeStyles } from './abstract'
import { getSmallSizeStyles }  from './abstract'

const getShapeStyles = (theme): styleFn => {
  const normalSizeStyles = getNormalSizeStyles(theme)
  const smallSIzeStyles = getSmallSizeStyles(theme)

  return switchProp(prop('sizes', 'normal'), {
    normal: normalSizeStyles,
    small: smallSIzeStyles,
  })
}

export { getShapeStyles }
