import { createAppearanceStyles } from '@atls-ui-parts/button'
import { execAndSerialize }       from '@atls-ui-parts/styles'
import { combine }                from '@atls-ui-parts/styles'

import { styleFn }                from 'styled-system'
import { prop }                   from 'styled-tools'

const getPrimaryColorsStyles = (): styleFn => {
  const primaryDefaultColors: styleFn = () => ({
    '&': createAppearanceStyles({
      fontColor: prop('theme.colors.select.primary.default.font'),
      backgroundColor: prop('theme.colors.select.primary.default.background'),
      borderColor: prop('theme.colors.select.primary.default.border'),
    }),
  })

  const primaryHoverColors: styleFn = () => ({
    '&:hover': createAppearanceStyles({
      fontColor: prop('theme.colors.select.primary.hover.font'),
      backgroundColor: prop('theme.colors.select.primary.hover.background'),
      borderColor: prop('theme.colors.select.primary.hover.border'),
    }),
  })

  const primaryActiveColors: styleFn = () => ({
    '&:active': createAppearanceStyles({
      fontColor: prop('theme.colors.select.primary.focused.font'),
      backgroundColor: prop('theme.colors.select.primary.focused.background'),
      borderColor: prop('theme.colors.select.primary.focused.border'),
    }),
  })

  return execAndSerialize(combine(primaryDefaultColors, primaryHoverColors, primaryActiveColors))
}

export { getPrimaryColorsStyles }
