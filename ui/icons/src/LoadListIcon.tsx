import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const LoadListIcon = (props: IconProps) => {
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
        d='M2.99988 2.25H2.24988V3.75H2.99988L20.9999 3.75L21.7499 3.75V2.25H20.9999H2.99988ZM2.99988 9.25H2.24988V10.75H2.99988L20.9999 10.75H21.7499V9.25H20.9999L2.99988 9.25ZM2.99988 16.25H2.24988V17.75H2.99988H9.99988H10.7499V16.25H9.99988H2.99988ZM18.7499 15V14.25H17.2499V15V19.1893L15.5302 17.4697L14.9999 16.9393L13.9392 18L14.4695 18.5303L17.4695 21.5303C17.7624 21.8232 18.2373 21.8232 18.5302 21.5303L21.5302 18.5303L22.0605 18L20.9999 16.9393L20.4695 17.4697L18.7499 19.1893V15Z'
        fill={theme.colors[props.color || 0] || props.color || '#1E1915'}
      />
    </svg>
  )
}
