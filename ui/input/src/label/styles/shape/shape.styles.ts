import { styleFn } from 'styled-system'

export const createShapeStyles = (): styleFn =>
  ({ theme }) => ({
    fontSize: theme.fontSizes.normal.semiReduced,
    fontWeight: theme.fontWeights.medium,
    lineHeight: theme.lineHeights.medium,
  })
