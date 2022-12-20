import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const ListIcon = (props: IconProps) => {
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
        d='M4 4.25C3.0335 4.25 2.25 5.0335 2.25 6C2.25 6.9665 3.0335 7.75 4 7.75C4.9665 7.75 5.75 6.9665 5.75 6C5.75 5.0335 4.9665 4.25 4 4.25ZM21.75 5.25L8.25 5.25V6.75L21.75 6.75V5.25ZM4 10.25C3.0335 10.25 2.25 11.0335 2.25 12C2.25 12.9665 3.0335 13.75 4 13.75C4.9665 13.75 5.75 12.9665 5.75 12C5.75 11.0335 4.9665 10.25 4 10.25ZM21.75 11.25L8.25 11.25V12.75L21.75 12.75V11.25ZM4 16.25C3.0335 16.25 2.25 17.0335 2.25 18C2.25 18.9665 3.0335 19.75 4 19.75C4.9665 19.75 5.75 18.9665 5.75 18C5.75 17.0335 4.9665 16.25 4 16.25ZM21.75 17.25L8.25 17.25V18.75L21.75 18.75V17.25Z'
        fill={theme.colors[props.color || 0] || props.color || '#1E1915'}
      />
    </svg>
  )
}
