import { createShapeStyles } from '@atls-ui-parts/button'

import { styleFn }           from 'styled-system'

const getSmallSecondarySizeStyles = (theme): styleFn =>
  createShapeStyles({
    size: 40,
    fontSize: theme.fontSizes.normal.semiReduced,
    rounding: theme.radii.intermediate,
    fontWeight: theme.fontWeights.normal,
    paddingLeft: 12,
    paddingRight: 12,
    fontFamily: theme.fonts.primary,
  })

export { getSmallSecondarySizeStyles }
