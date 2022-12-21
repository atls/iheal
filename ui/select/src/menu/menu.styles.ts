import { styleFn } from 'styled-system'

export const baseMenuStyles: styleFn = ({ triggerBounds }) => ({
  display: 'flex',
  boxSizing: 'border-box',
  flexDirection: 'column',
  listStyleType: 'none',
  outline: 'none',
  padding: 0,
  width: triggerBounds ? triggerBounds.width : 'auto',
  zIndex: 800,
  marginTop: 8,
})

export const shapeMenuStyles: styleFn = ({ theme, menuWidth }) => ({
  borderRadius: theme.radii.intermediate,
  overflow: 'hidden',
  fontFamily: theme.fonts.primary,
  minWidth: menuWidth !== undefined ? menuWidth : 'auto',
})

export const appearanceMenuStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.white,
  boxShadow: theme.shadows.shSmall,
})
