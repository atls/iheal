import { createShapeStyles } from '@atls-ui-parts/button'

import { styleFn }           from 'styled-system'

const getMdSizeStyles = (theme): styleFn =>
  createShapeStyles({
    size: 48,
    fontSize: theme.fontSizes.normal.semiReduced,
    rounding: theme.radii.intermediate,
    paddingRight: 12,
    paddingLeft: 12,
    fontWeight: theme.fontWeights.semiBold,
    fontFamily: theme.fonts.primary,
  })

export { getMdSizeStyles }
