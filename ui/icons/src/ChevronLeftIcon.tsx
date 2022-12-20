import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const ChevronLeftIcon = (props: IconProps) => {
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
        d='M15.5303 6.53032L16.0607 5.99999L15 4.93933L14.4697 5.46966L8.46967 11.4697C8.17678 11.7626 8.17678 12.2374 8.46967 12.5303L14.4697 18.5303L15 19.0607L16.0607 18L15.5303 17.4697L10.0607 12L15.5303 6.53032Z'
        fill={theme.colors[props.color || 0] || props.color || '#1E1915'}
      />
    </svg>
  )
}
