import { styleFn } from 'styled-system'

export const baseStyles: styleFn = ({ theme }) => ({
  position: 'absolute',
  bottom: '-1px',
  left: 0,
  right: 0,
  height: 2,
  background: theme.colors.primaryMain,
})
