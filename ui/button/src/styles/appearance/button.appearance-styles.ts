import { createAppearanceStyles } from '@atls-ui-parts/button'

import { ifProp }                 from 'styled-tools'
import { switchProp }             from 'styled-tools'
import { prop }                   from 'styled-tools'

const appearancePrimaryDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.default.font'),
  backgroundColor: prop('theme.colors.button.primary.default.background'),
  borderColor: prop('theme.colors.button.primary.default.border'),
})

const appearancePrimaryHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.hover.font'),
  backgroundColor: prop('theme.colors.button.primary.hover.background'),
  borderColor: prop('theme.colors.button.primary.hover.border'),
})

const appearancePrimaryPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.pressed.font'),
  backgroundColor: prop('theme.colors.button.primary.pressed.background'),
  borderColor: prop('theme.colors.button.primary.pressed.border'),
})

const appearancePrimaryDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.disabled.font'),
  backgroundColor: prop('theme.colors.button.primary.disabled.background'),
  borderColor: prop('theme.colors.button.primary.disabled.border'),
})

const appearanceSecondaryDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.default.font'),
  backgroundColor: prop('theme.colors.button.secondary.default.background'),
  borderColor: prop('theme.colors.button.secondary.default.border'),
})

const appearanceSecondaryHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.hover.font'),
  backgroundColor: prop('theme.colors.button.secondary.hover.background'),
  borderColor: prop('theme.colors.button.secondary.hover.border'),
})

const appearanceSecondaryPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.pressed.font'),
  backgroundColor: prop('theme.colors.button.secondary.pressed.background'),
  borderColor: prop('theme.colors.button.secondary.pressed.border'),
})

const appearanceSecondaryDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.disabled.font'),
  backgroundColor: prop('theme.colors.button.secondary.disabled.background'),
  borderColor: prop('theme.colors.button.secondary.disabled.border'),
})

const appearanceTertiaryDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.tertiary.default.font'),
  backgroundColor: prop('theme.colors.button.tertiary.default.background'),
  borderColor: prop('theme.colors.button.tertiary.default.border'),
})

const appearanceTertiaryHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.tertiary.hover.font'),
  backgroundColor: prop('theme.colors.button.tertiary.hover.background'),
  borderColor: prop('theme.colors.button.tertiary.hover.border'),
})

const appearanceTertiaryPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.tertiary.pressed.font'),
  backgroundColor: prop('theme.colors.button.tertiary.pressed.background'),
  borderColor: prop('theme.colors.button.tertiary.pressed.border'),
})

const appearanceTertiaryDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.tertiary.disabled.font'),
  backgroundColor: prop('theme.colors.button.tertiary.disabled.background'),
  borderColor: prop('theme.colors.button.tertiary.disabled.border'),
})

const appearanceLinkDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.link.default.font'),
  backgroundColor: prop('theme.colors.button.link.default.background'),
  borderColor: prop('theme.colors.button.link.default.border'),
})

const appearanceLinkHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.link.hover.font'),
  backgroundColor: prop('theme.colors.button.link.hover.background'),
  borderColor: prop('theme.colors.button.link.hover.border'),
})

const appearanceLinkPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.link.pressed.font'),
  backgroundColor: prop('theme.colors.button.link.pressed.background'),
  borderColor: prop('theme.colors.button.link.pressed.border'),
})

const appearanceLinkDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.link.disabled.font'),
  backgroundColor: prop('theme.colors.button.link.disabled.background'),
  borderColor: prop('theme.colors.button.link.disabled.border'),
})

const appearanceSuccessDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.success.default.font'),
  backgroundColor: prop('theme.colors.button.success.default.background'),
  borderColor: prop('theme.colors.button.success.default.border'),
})

const appearanceSuccessHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.success.hover.font'),
  backgroundColor: prop('theme.colors.button.success.hover.background'),
  borderColor: prop('theme.colors.button.success.hover.border'),
})

const appearanceSuccessPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.success.pressed.font'),
  backgroundColor: prop('theme.colors.button.success.pressed.background'),
  borderColor: prop('theme.colors.button.success.pressed.border'),
})

const appearanceSuccessDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.success.disabled.font'),
  backgroundColor: prop('theme.colors.button.success.disabled.background'),
  borderColor: prop('theme.colors.button.success.disabled.border'),
})

const appearanceDestructiveDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.destructive.default.font'),
  backgroundColor: prop('theme.colors.button.destructive.default.background'),
  borderColor: prop('theme.colors.button.destructive.default.border'),
})

const appearanceDestructiveHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.destructive.hover.font'),
  backgroundColor: prop('theme.colors.button.destructive.hover.background'),
  borderColor: prop('theme.colors.button.destructive.hover.border'),
})

const appearanceDestructivePressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.destructive.pressed.font'),
  backgroundColor: prop('theme.colors.button.destructive.pressed.background'),
  borderColor: prop('theme.colors.button.destructive.pressed.border'),
})

const appearanceDestructiveDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.destructive.disabled.font'),
  backgroundColor: prop('theme.colors.button.destructive.disabled.background'),
  borderColor: prop('theme.colors.button.destructive.disabled.border'),
})

const appearanceRedDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.red.default.font'),
  backgroundColor: prop('theme.colors.button.red.default.background'),
  borderColor: prop('theme.colors.button.red.default.border'),
})

const appearanceRedHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.red.hover.font'),
  backgroundColor: prop('theme.colors.button.red.hover.background'),
  borderColor: prop('theme.colors.button.red.hover.border'),
})

const appearanceRedPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.red.pressed.font'),
  backgroundColor: prop('theme.colors.button.red.pressed.background'),
  borderColor: prop('theme.colors.button.red.pressed.border'),
})

const appearanceRedDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.red.disabled.font'),
  backgroundColor: prop('theme.colors.button.red.disabled.background'),
  borderColor: prop('theme.colors.button.red.disabled.border'),
})

const appearanceStyles = switchProp(prop('variant', 'primary'), {
  primary: ifProp(
    prop('disabled', false),
    appearancePrimaryDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearancePrimaryPressedStyles,
      ifProp(prop('hover', false), appearancePrimaryHoverStyles, appearancePrimaryDefaultStyles)
    )
  ),
  secondary: ifProp(
    prop('disabled', false),
    appearanceSecondaryDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceSecondaryPressedStyles,
      ifProp(prop('hover', false), appearanceSecondaryHoverStyles, appearanceSecondaryDefaultStyles)
    )
  ),
  tertiary: ifProp(
    prop('disabled', false),
    appearanceTertiaryDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceTertiaryPressedStyles,
      ifProp(prop('hover', false), appearanceTertiaryHoverStyles, appearanceTertiaryDefaultStyles)
    )
  ),
  link: ifProp(
    prop('disabled', false),
    appearanceLinkDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceLinkPressedStyles,
      ifProp(prop('hover', false), appearanceLinkHoverStyles, appearanceLinkDefaultStyles)
    )
  ),
  success: ifProp(
    prop('disabled', false),
    appearanceSuccessDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceSuccessPressedStyles,
      ifProp(prop('hover', false), appearanceSuccessHoverStyles, appearanceSuccessDefaultStyles)
    )
  ),
  destructive: ifProp(
    prop('disabled', false),
    appearanceDestructiveDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceDestructivePressedStyles,
      ifProp(
        prop('hover', false),
        appearanceDestructiveHoverStyles,
        appearanceDestructiveDefaultStyles
      )
    )
  ),
  red: ifProp(
    prop('disabled', false),
    appearanceRedDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceRedPressedStyles,
      ifProp(prop('hover', false), appearanceRedHoverStyles, appearanceRedDefaultStyles)
    )
  ),
})

export { appearanceStyles }
