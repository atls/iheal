import { ReactChild } from 'react'

type Variant = 'grayscale' | 'blue' | 'yellow' | 'green' | 'red' | 'purple'

export interface BadgeProps {
  text?: string
  icon?: ReactChild | null
  position?: string | null
  variant?: Variant
  isRemove?: boolean
  remove?: () => any
}
