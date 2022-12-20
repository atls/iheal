import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const SwitchHorizontalIcon = (props: IconProps) => {
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
        d='M16 1.93933L20.5303 6.46966C20.8232 6.76255 20.8232 7.23743 20.5303 7.53032L16 12.0607L14.9393 11L18.1893 7.74999H3.25V6.24999H18.1893L14.9393 2.99999L16 1.93933ZM9.06066 13L5.81066 16.25H20.75V17.75H5.81066L9.06066 21L8 22.0606L3.46967 17.5303C3.17678 17.2374 3.17678 16.7626 3.46967 16.4697L8 11.9393L9.06066 13Z'
        fill={theme.colors[props.color || 0] || props.color || '#1E1915'}
      />
    </svg>
  )
}
