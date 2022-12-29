import { createShapeStyles } from '@atls-ui-parts/button'

import { styleFn }           from 'styled-system'

const getLgTransparentSizeStyles = (theme): styleFn =>
  createShapeStyles({
    size: 'auto',
    fontSize: theme.fontSizes.normal.semiDefault,
    paddingRight: 0,
    paddingLeft: 0,
    fontWeight: theme.fontWeights.semiBold,
    fontFamily: theme.fonts.primary,
  })

export { getLgTransparentSizeStyles }
