import { InputHTMLAttributes } from 'react'
import { PlacementType }       from 'react-laag/dist/PlacementType'

type SelectSizes = 'normal' | 'medium' | 'ghost'
type SelectColors = 'primary' | 'secondary'

export interface SelectProps extends Omit<InputHTMLAttributes<any>, 'onChange'> {
  label?: string
  items: string[]
  value?: string
  onChange?: (item: string) => void
  onSelect?: any
  placeholder?: string
  multiselect?: boolean
  colors?: SelectColors
  sizes?: SelectSizes
  attachment?: string
  selectedDefault?: number
  initialItem?: string
  menuWidth?: number
  arrowPosition?: string
  resetter?: boolean
  placement?: PlacementType
}
