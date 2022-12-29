import { createAppearanceStyles } from '@atls-ui-parts/button'
import { execAndSerialize }       from '@atls-ui-parts/styles'
import { combine }                from '@atls-ui-parts/styles'

import { styleFn }                from 'styled-system'
import { prop }                   from 'styled-tools'

const getSecondaryColorsStyles = (theme): styleFn => {
  const secondaryDefaultColors: styleFn = ({ isOpen }) => ({
    '&': createAppearanceStyles({
      fontColor: prop(
        isOpen
          ? 'theme.colors.button.tertiaryActive.default.font'
          : 'theme.colors.button.tertiary.default.font'
      ),
      backgroundColor: prop('theme.colors.button.tertiary.default.background'),
      borderColor: prop(
        isOpen
          ? 'theme.colors.button.tertiaryActive.default.border'
          : 'theme.colors.button.tertiary.default.border'
      ),
    }),
    'svg > path:only-of-type': {
      fill: isOpen
        ? theme.colors.button.tertiaryActive.default.border
        : theme.colors.button.tertiary.default.font,
    },
  })

  const secondaryHoverColors: styleFn = ({ isOpen }) => ({
    '&:hover': createAppearanceStyles({
      fontColor: prop(
        isOpen
          ? 'theme.colors.button.tertiaryActive.hover.font'
          : 'theme.colors.button.tertiary.hover.font'
      ),
      backgroundColor: prop('theme.colors.button.tertiary.hover.background'),
      borderColor: prop(
        isOpen
          ? 'theme.colors.button.tertiaryActive.hover.border'
          : 'theme.colors.button.tertiary.hover.border'
      ),
    }),
    '&:hover svg > path:only-of-type': {
      fill: isOpen
        ? theme.colors.button.tertiaryActive.default.border
        : theme.colors.button.tertiary.default.font,
    },
  })

  const secondaryActiveColors: styleFn = () => ({
    '&:active': createAppearanceStyles({
      fontColor: prop('theme.colors.button.tertiary.focused.font'),
      backgroundColor: prop('theme.colors.button.tertiary.focused.background'),
      borderColor: prop('theme.colors.button.tertiary.focused.border'),
    }),
  })

  return execAndSerialize(
    combine(secondaryDefaultColors, secondaryHoverColors, secondaryActiveColors)
  )
}

export { getSecondaryColorsStyles }
