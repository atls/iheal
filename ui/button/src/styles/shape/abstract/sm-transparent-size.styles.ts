import { createShapeStyles } from '@atls-ui-parts/button'

import { styleFn }           from 'styled-system'

const getSmTransparentSizeStyles = (theme): styleFn =>
  createShapeStyles({
    size: 'auto',
    fontSize: theme.fontSizes.small.semiLarge,
    paddingRight: 0,
    paddingLeft: 0,
    fontWeight: theme.fontWeights.semiBold,
    fontFamily: theme.fonts.primary,
  })

export { getSmTransparentSizeStyles }
