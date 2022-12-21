import { styleFn } from 'styled-system'

export const baseMenuMultiselectStyles: styleFn = ({ triggerBounds }) => ({
  display: 'flex',
  boxSizing: 'border-box',
  flexDirection: 'column',
  listStyleType: 'none',
  outline: 'none',
  padding: 0,
  width: triggerBounds ? triggerBounds.width : 'auto',
  zIndex: 800,
  marginTop: 4,
})

export const shapeMenuMultiselectStyles: styleFn = ({ theme, menuWidth }) => ({
  borderRadius: theme.radii.intermediate,
  fontFamily: theme.fonts.primary,
  minWidth: menuWidth !== undefined ? menuWidth : 'auto',
})

export const appearanceMenuMultiselectStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.white,
  boxShadow: theme.shadows.shSmall,
})
