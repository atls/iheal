export interface CheckboxProps {
  active?: boolean
  onClick?: () => boolean
  checked?: boolean
  disabled?: boolean
  onCheck?: (newState: boolean) => any
  fill?: boolean
  children?: any
  icon?: string
}
