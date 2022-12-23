import { styleFn } from 'styled-system'

export const baseContainerStyles: styleFn = ({ isOpen, arrowPosition }) => ({
  transform: `rotate(${isOpen ? 180 : 0}deg)`,
  marginRight: `${arrowPosition === 'left' ? '6px' : 0}`,
  transition: '.35s',
})
