import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const DoneActiveIcon = (props: IconProps) => {
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
      <g clipPath='url(#clip0_572_76840)'>
        <path
          d='M7.64828 20.6463L1.00183 13.9999L0.00183105 12.9999L3.00183 9.99988L7.64828 14.6463C7.84354 14.8416 8.16012 14.8416 8.35538 14.6463L21.0018 1.99988L24.0018 4.99988L8.35538 20.6463C8.16012 20.8416 7.84354 20.8416 7.64828 20.6463Z'
          fill='#189239'
        />
      </g>
      <defs>
        <clipPath id='clip0_572_76840'>
          <rect width={24} height={24} fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
