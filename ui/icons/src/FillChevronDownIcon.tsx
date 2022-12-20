import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const FillChevronDownIcon = (props: IconProps) => {
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
        d='M8.70711 9.29289L11.1464 6.85355C11.4614 6.53857 11.2383 6 10.7929 6H5.20711C4.76165 6 4.53857 6.53857 4.85355 6.85355L7.29289 9.29289C7.68342 9.68342 8.31658 9.68342 8.70711 9.29289Z'
        fill={theme.colors[props.color || 0] || props.color || '#1E1915'}
      />
    </svg>
  )
}
