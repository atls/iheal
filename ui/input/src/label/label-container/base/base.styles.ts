import { styleFn } from 'styled-system'

export const createBaseStyles = (): styleFn => () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
