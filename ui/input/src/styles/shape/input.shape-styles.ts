import { createShapeStyles } from '@atls-ui-parts/input'

import { prop }              from 'styled-tools'
import { switchProp }        from 'styled-tools'

const shapeNormalSizeStyles = createShapeStyles({
  fontFamily: prop('theme.fonts.primary'),
  fontWeight: prop('theme.fontWeights.medium'),
  size: 48,
  fontSize: prop('theme.fontSizes.normal.semiReduced'),
  rounding: prop('theme.radii.intermediate') as unknown as number,
  paddingLeft: 16,
  paddingRight: 16,
})

export const shapeStyles = switchProp(prop('size', 'normal'), {
  normal: shapeNormalSizeStyles,
})
