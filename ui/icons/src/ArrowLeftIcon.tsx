import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const ArrowLeftIcon = (props: IconProps) => {
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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.0607 5.99999L5.81066 11.25H20.75V12.75H5.81066L11.0607 18L10 19.0607L3.46967 12.5303C3.17678 12.2374 3.17678 11.7626 3.46967 11.4697L10 4.93933L11.0607 5.99999Z'
        fill={theme.colors[props.color || 0] || props.color || '#1E1915'}
      />
    </svg>
  )
}
