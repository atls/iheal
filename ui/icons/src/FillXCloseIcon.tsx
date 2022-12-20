import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const FillXCloseIcon = (props: IconProps) => {
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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5 1C2.79086 1 1 2.79086 1 5V11C1 13.2091 2.79086 15 5 15H11C13.2091 15 15 13.2091 15 11V5C15 2.79086 13.2091 1 11 1H5ZM6.03033 4.96967L5.5 4.43934L4.43934 5.5L4.96967 6.03033L6.93934 8L4.96967 9.96967L4.43934 10.5L5.5 11.5607L6.03033 11.0303L8 9.06066L9.96967 11.0303L10.5 11.5607L11.5607 10.5L11.0303 9.96967L9.06066 8L11.0303 6.03033L11.5607 5.5L10.5 4.43934L9.96967 4.96967L8 6.93934L6.03033 4.96967Z'
        fill={theme.colors[props.color || 0] || props.color || '#1E1915'}
      />
    </svg>
  )
}
