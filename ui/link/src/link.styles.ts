import { styleFn } from 'styled-system'

export const transitionStyles: styleFn = () => ({
  transition: '.3s',
})

export const shapeLinkStyles: styleFn = ({ theme }) => ({
  fontSize: theme.fontSizes.normal.semiReduced,
  fontFamily: theme.fonts.primary,
  fontWeight: theme.fontWeights.medium,
  whiteSpace: 'nowrap',
})

export const activeLinkStyles: styleFn = ({ active, theme }) =>
  active && {
    color: theme.colors.links.primary.default.font,
  }
