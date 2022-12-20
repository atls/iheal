import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const CopyIcon = (props: IconProps) => {
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
        d='M8 8V8C8 5.17157 8 3.75736 8.87868 2.87868C9.75736 2 11.1716 2 14 2H16C18.8284 2 20.2426 2 21.1213 2.87868C22 3.75736 22 5.17157 22 8V10C22 12.8284 22 14.2426 21.1213 15.1213C20.2426 16 18.8284 16 16 16V16M8 8H10C12.8284 8 14.2426 8 15.1213 8.87868C16 9.75736 16 11.1716 16 14V16C16 18.8284 16 20.2426 15.1213 21.1213C14.2426 22 12.8284 22 10 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16L2 14C2 11.1716 2 9.75736 2.87868 8.87868C3.75736 8 5.17157 8 8 8Z'
        stroke={theme.colors[props.color || 0] || props.color || '#1E1915'}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
