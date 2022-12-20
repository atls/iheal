import { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'

import { LayoutProps }                    from 'styled-system'
import { SpaceProps }                     from 'styled-system'

type ButtonColors =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'link'
  | 'success'
  | 'destructive'
  | 'red'

type ButtonSizes = 'sm' | 'md' | 'lg' | 'smTransparent' | 'mdTransparent' | 'lgTransparent'

export interface ButtonProps extends BaseButtonProps, LayoutProps, SpaceProps {
  variant?: ButtonColors
  size?: ButtonSizes
  width?: number | string | number[] | string[]
  height?: number | string | number[] | string[]
}
