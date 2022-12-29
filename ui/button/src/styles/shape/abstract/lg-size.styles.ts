import { createShapeStyles } from '@atls-ui-parts/button'

import { styleFn }           from 'styled-system'

const getLgSizeStyles = (theme): styleFn =>
  createShapeStyles({
    size: 56,
    fontSize: theme.fontSizes.normal.semiDefault,
    rounding: theme.radii.intermediate,
    paddingRight: 20,
    paddingLeft: 20,
    fontWeight: theme.fontWeights.semiBold,
    fontFamily: theme.fonts.primary,
  })

export { getLgSizeStyles }
