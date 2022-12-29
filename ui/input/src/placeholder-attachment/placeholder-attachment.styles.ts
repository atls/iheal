import { styleFn }    from 'styled-system'
import { prop }       from 'styled-tools'
import { switchProp } from 'styled-tools'

export const placeholderInputStyles: styleFn = ({ theme }) => ({
  primary: {
    'input::placeholder': {
      color: theme.colors.gray50,
    },
  },
})

export const placeholderStyles = () =>
  switchProp(prop('variant', 'primary'), placeholderInputStyles)
