import { createShapeStyles } from '@atls-ui-parts/button'

import { styleFn }           from 'styled-system'

const getSmallSizeStyles = (theme): styleFn =>
  createShapeStyles({
    size: 40,
    fontSize: theme.fontSizes.normal.semiReduced,
    rounding: theme.radii.intermediate,
    fontWeight: theme.fontWeights.normal,
    paddingLeft: 8,
    paddingRight: 8,
    fontFamily: theme.fonts.primary,
  })

export { getSmallSizeStyles }
