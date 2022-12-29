import { styleFn }                from 'styled-system'
import { switchProp }             from 'styled-tools'
import { prop }                   from 'styled-tools'

import { getPrimaryColorsStyles } from './abstract'

const getExtendsAppearanceStyles = (): styleFn => {
  const primaryColorsStyles = getPrimaryColorsStyles()

  return switchProp(prop('variant', 'primary'), {
    primary: primaryColorsStyles,
  })
}

export { getExtendsAppearanceStyles }
