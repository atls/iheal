import { styleFn }                    from 'styled-system'
import { switchProp }                 from 'styled-tools'
import { prop }                       from 'styled-tools'

import { getLgSizeStyles }            from './abstract'
import { getLgTransparentSizeStyles } from './abstract'
import { getMdSizeStyles }            from './abstract'
import { getMdTransparentSizeStyles } from './abstract'
import { getSmSizeStyles }            from './abstract'
import { getSmTransparentSizeStyles } from './abstract'

const getShapeStyles = (theme): styleFn => {
  const smSizeStyles = getSmSizeStyles(theme)
  const mdSizeStyles = getMdSizeStyles(theme)
  const lgSizeStyles = getLgSizeStyles(theme)
  const smTransparentSizeStyles = getSmTransparentSizeStyles(theme)
  const mdTransparentSizeStyles = getMdTransparentSizeStyles(theme)
  const lgTransparentSizeStyles = getLgTransparentSizeStyles(theme)

  return switchProp(prop('size', 'md'), {
    sm: smSizeStyles,
    md: mdSizeStyles,
    lg: lgSizeStyles,
    smTransparent: smTransparentSizeStyles,
    mdTransparent: mdTransparentSizeStyles,
    lgTransparent: lgTransparentSizeStyles,
  })
}

export { getShapeStyles }
