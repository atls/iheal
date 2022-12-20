import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const FillChevronUpIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M8.70711 6.70711L11.1464 9.14645C11.4614 9.46143 11.2383 10 10.7929 10H5.20711C4.76165 10 4.53857 9.46143 4.85355 9.14645L7.29289 6.70711C7.68342 6.31658 8.31658 6.31658 8.70711 6.70711Z'
        fill={theme.colors[props.color || 0] || props.color || '#1E1915'}
      />
    </svg>
  )
}
