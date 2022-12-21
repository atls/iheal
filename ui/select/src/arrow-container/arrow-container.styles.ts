import { styleFn } from 'styled-system'

export const baseContainerStyles: styleFn = ({ isOpen, selectedItems, arrowPosition }) => ({
  transform: `rotate(${isOpen ? 180 : 0}deg)`,
  marginLeft: `${selectedItems ? '6px' : 0}`,
  marginRight: `${arrowPosition === 'left' ? '6px' : 0}`,
  transition: '.35s',
})
