import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const DoneOutlineIcon = (props: IconProps) => {
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
      <g clipPath='url(#clip0_566_77134)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M20.0018 1.93921L20.5322 2.46954L23.5322 5.46954L24.0625 5.99987L23.5322 6.5302L8.88571 21.1766C8.39755 21.6648 7.6061 21.6648 7.11794 21.1766L0.471492 14.5302L-0.0588379 13.9999L0.471492 13.4695L3.47149 10.4695L4.00182 9.93921L4.53215 10.4695L8.00182 13.9392L19.4715 2.46954L20.0018 1.93921ZM20.0018 4.06053L8.8857 15.1766C8.39755 15.6648 7.60609 15.6648 7.11794 15.1766L4.00182 12.0605L2.06248 13.9999L8.00182 19.9392L21.9412 5.99987L20.0018 4.06053Z'
          fill={theme.colors[props.color || 0] || props.color || '#1E1915'}
        />
      </g>
      <defs>
        <clipPath id='clip0_566_77134'>
          <rect width={24} height={24} fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
