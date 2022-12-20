import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const FillSelectorIcon = (props: IconProps) => {
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
        d='M8.70711 2.70711L11.1464 5.14645C11.4614 5.46143 11.2383 6 10.7929 6H5.20711C4.76165 6 4.53857 5.46143 4.85355 5.14645L7.29289 2.70711C7.68342 2.31658 8.31658 2.31658 8.70711 2.70711Z'
        fill={theme.colors[props.color || 0] || props.color || '#1E1915'}
      />
      <path
        d='M8.70711 13.2929L11.1464 10.8536C11.4614 10.5386 11.2383 10 10.7929 10H5.20711C4.76165 10 4.53857 10.5386 4.85355 10.8536L7.29289 13.2929C7.68342 13.6834 8.31658 13.6834 8.70711 13.2929Z'
        fill={theme.colors[props.color || 0] || props.color || '#1E1915'}
      />
    </svg>
  )
}
