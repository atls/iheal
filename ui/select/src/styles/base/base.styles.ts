import { CSSObject }              from '@emotion/css'
import { createBaseStyles }       from '@atls-ui-parts/button'

import { styleFn }                from 'styled-system'

import { createTransitionStyles } from './factories'

export const baseSelectStyles: CSSObject = {
  position: 'relative',
  width: '100%',
  justifyContent: 'flex-start',
  whiteSpace: 'nowrap',
}

const getBaseStyles = (): styleFn => {
  const baseStyles = createBaseStyles()
  const transitionStyles = createTransitionStyles(0.35)

  return () => ({
    ...baseStyles(),
    ...baseSelectStyles,
    ...transitionStyles(),
  })
}

export { getBaseStyles }
