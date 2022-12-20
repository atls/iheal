import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const ChevronDownIcon = (props: IconProps) => {
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
        d='M6.06249 7.99988L6.59282 8.53021L12.0625 13.9999L17.5322 8.53021L18.0625 7.99988L19.1232 9.06054L18.5928 9.59087L12.5928 15.5909C12.2999 15.8838 11.8251 15.8838 11.5322 15.5909L5.53216 9.59087L5.00183 9.06054L6.06249 7.99988Z'
        fill={theme.colors[props.color || 0] || props.color || '#1E1915'}
      />
    </svg>
  )
}
