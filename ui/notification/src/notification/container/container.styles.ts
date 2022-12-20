import { styleFn } from 'styled-system'

export const baseStyles: styleFn = ({ theme }) => ({
  paddingRight: 32,
  paddingLeft: 16,
  backgroundColor: theme.colors.transparentDark,
  borderRadius: theme.radii.default,
  height: 48,
  alignItems: 'center',
})
