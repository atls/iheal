import { styleFn } from 'styled-system'

export const createBaseStyles = (): styleFn =>
  ({ theme }) => ({
    whiteSpace: 'nowrap',
    fontFamily: theme.fonts.primary,
  })
