import { createBoxAppearanceStyles }     from '@atls-ui-parts/checkbox'
import { createCheckAppearanceStyles }   from '@atls-ui-parts/checkbox'
import { createContainerPositionStyles } from '@atls-ui-parts/checkbox'
import { createLabelAppearanceStyles }   from '@atls-ui-parts/checkbox'
import { createLabelPositionStyles }     from '@atls-ui-parts/checkbox'

import { styleFn }                       from 'styled-system'
import { ifProp }                        from 'styled-tools'
import { prop }                          from 'styled-tools'

import { theme }                         from '@ui/theme'

export const labelAppearanceStyles = createLabelAppearanceStyles({
  fontColor: theme.colors.black,
})

export const labelPositionStyles = ({ ghost }) =>
  createLabelPositionStyles({
    margin: ghost ? '0px' : '8px',
  })

export const containerPositionStyles = createContainerPositionStyles()

export const containerFillStyles: styleFn = ifProp(prop('fill', false), { width: '100%' })

export const checkmarkAppearanceStyles = createCheckAppearanceStyles({
  color: theme.colors.white,
})

export const checkmarkCheckStyles = ifProp(
  'checked',
  {
    display: 'flex',
  },
  { display: 'none' }
)

export const boxDefaultAppearanceStyles = createBoxAppearanceStyles({
  borderColor: theme.colors.checkbox.primary.unchecked.default.border,
  backgroundColor: theme.colors.checkbox.primary.unchecked.default.background,
})

export const boxHoverAppearanceStyles = createBoxAppearanceStyles({
  borderColor: theme.colors.checkbox.primary.unchecked.hover.border,
  backgroundColor: theme.colors.checkbox.primary.unchecked.hover.background,
})

export const boxCheckedAppearanceStyles = createBoxAppearanceStyles({
  borderColor: theme.colors.checkbox.primary.checked.default.border,
  backgroundColor: theme.colors.checkbox.primary.checked.default.background,
})

export const boxCheckedHoverAppearanceStyles = createBoxAppearanceStyles({
  borderColor: theme.colors.checkbox.primary.checked.hover.border,
  backgroundColor: theme.colors.checkbox.primary.checked.hover.background,
})

export const boxDisabledAppearanceStyles = createBoxAppearanceStyles({
  borderColor: theme.colors.checkbox.primary.disabled.border,
  backgroundColor: theme.colors.checkbox.primary.disabled.background,
})

export const boxAppearanceStyles = ifProp(
  prop('disabled', false),
  boxDisabledAppearanceStyles,
  ifProp(
    prop('checked', false),
    ifProp(prop('hover', false), boxCheckedHoverAppearanceStyles, boxCheckedAppearanceStyles),
    ifProp(prop('hover', false), boxHoverAppearanceStyles, boxDefaultAppearanceStyles)
  )
)
