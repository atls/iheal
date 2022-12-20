import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const FiltersIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M6 12H18M3 6H21M9 18H15'
        stroke={theme.colors[props.color || 0] || props.color || '#1E1915'}
        strokeWidth={1.5}
        strokeLinecap='square'
        strokeLinejoin='round'
      />
    </svg>
  )
}
