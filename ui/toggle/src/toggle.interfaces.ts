import { SwitchProps } from '@atls-ui-parts/switch'

export type ToggleSize = 'small' | 'medium'

export interface ToggleProps extends SwitchProps {
  size?: ToggleSize
}
