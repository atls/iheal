import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const ComponentIcon = (props: IconProps) => {
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
        d='M21 7.02674L10.8115 17.5038C10.1681 18.1654 9.12508 18.1654 8.48174 17.5038L3 11.8668L3.99846 10.8401L9.4802 16.4771C9.5721 16.5716 9.72111 16.5716 9.81302 16.4771L20.0015 6L21 7.02674Z'
        fill={theme.colors[props.color || 0] || props.color || '#1E1915'}
      />
    </svg>
  )
}
