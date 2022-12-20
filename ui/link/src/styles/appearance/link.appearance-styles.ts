import { styleFn }    from 'styled-system'
import { switchProp } from 'styled-tools'
import { prop }       from 'styled-tools'

const appearanceLinkStyles: styleFn = ({ theme }) => ({
  primary: {
    color: theme.colors.links.primary.default.font,
    '&:hover': {
      color: theme.colors.links.primary.hover.font,
    },
    '&:active': {
      color: theme.colors.links.primary.pressed.font,
    },
  },
})

export const appearanceStyles = () => switchProp(prop('variant', 'primary'), appearanceLinkStyles)
