import { createAppearanceStyles } from '@atls-ui-parts/input'
import { execAndSerialize }       from '@atls-ui-parts/styles'
import { combine }                from '@atls-ui-parts/styles'

import { styleFn }                from 'styled-system'
import { prop }                   from 'styled-tools'

const getPrimaryColorsStyles = (): styleFn => {
  const primaryFilledColors: styleFn = ({ value, error }) =>
    value !== undefined &&
    value !== '' &&
    !error && {
      '&': createAppearanceStyles({
        borderColor: prop('theme.colors.gray50'),
        backgroundColor: prop('theme.colors.input.primary.default'),
        fontColor: prop('theme.colors.input.primary.default.font'),
      }),
    }

  return execAndSerialize(combine(primaryFilledColors))
}

export { getPrimaryColorsStyles }
