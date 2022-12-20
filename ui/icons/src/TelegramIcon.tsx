import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const TelegramIcon = (props: IconProps) => {
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
        d='M14.0896 3.69627L12.2411 12.4135C12.1016 13.0286 11.738 13.1817 11.2213 12.8921L8.40471 10.8166L7.04584 12.1238C6.89534 12.2743 6.76977 12.3999 6.47971 12.3999L6.68227 9.53165L11.9021 4.81496C12.1291 4.61284 11.8526 4.5004 11.5495 4.70296L5.09633 8.76646L2.31821 7.89671C1.71402 7.70815 1.70308 7.29252 2.44421 7.00246L13.3104 2.81602C13.8135 2.62746 14.2536 2.92802 14.0896 3.69671V3.69627Z'
        fill='url(#paint0_linear_417_78048)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_417_78048'
          x1={8.00014}
          y1={2.76135}
          x2={8.00014}
          y2={13.0335}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#2AABEE' />
          <stop offset={1} stopColor='#229ED9' />
        </linearGradient>
      </defs>
    </svg>
  )
}
