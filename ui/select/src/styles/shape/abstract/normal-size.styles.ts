import { createShapeStyles } from '@atls-ui-parts/button'

import { styleFn }           from 'styled-system'

const getNormalSizeStyles = (theme): styleFn =>
  createShapeStyles({
    size: 56,
    fontSize: theme.fontSizes.normal.semiReduced,
    rounding: theme.radii.intermediate,
    fontWeight: theme.fontWeights.normal,
    paddingLeft: 16,
    paddingRight: 16,
    fontFamily: theme.fonts.primary,
  })

export { getNormalSizeStyles }
