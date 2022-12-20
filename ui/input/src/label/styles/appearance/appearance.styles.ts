import { styleFn } from 'styled-system'

export const createAppearanceStyles = (): styleFn =>
  ({ theme }) => ({
    color: theme.colors.gray70,
  })
