import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const ArrowRightIcon = (props: IconProps) => {
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
        d='M14 4.93933L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14 19.0607L12.9393 18L18.1893 12.75H3.25V11.25H18.1893L12.9393 5.99999L14 4.93933Z'
        fill={theme.colors[props.color || 0] || props.color || '#1E1915'}
      />
    </svg>
  )
}
