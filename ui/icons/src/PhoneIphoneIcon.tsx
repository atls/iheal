import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const PhoneIphoneIcon = (props: IconProps) => {
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
        d='M10.5714 1H5.42857C4.64 1 4 1.65333 4 2.45833V13.5417C4 14.3467 4.64 15 5.42857 15H10.5714C11.36 15 12 14.3467 12 13.5417V2.45833C12 1.65333 11.36 1 10.5714 1ZM8 14.4167C7.52571 14.4167 7.14286 14.0258 7.14286 13.5417C7.14286 13.0575 7.52571 12.6667 8 12.6667C8.47429 12.6667 8.85714 13.0575 8.85714 13.5417C8.85714 14.0258 8.47429 14.4167 8 14.4167ZM10.8571 11.5833C10.8571 11.8595 10.6333 12.0833 10.3571 12.0833H5.64286C5.36672 12.0833 5.14286 11.8595 5.14286 11.5833V3.25C5.14286 2.97386 5.36671 2.75 5.64286 2.75H10.3571C10.6333 2.75 10.8571 2.97386 10.8571 3.25V11.5833Z'
        fill={theme.colors[props.color || 0] || props.color || '#332E2A'}
      />
    </svg>
  )
}
