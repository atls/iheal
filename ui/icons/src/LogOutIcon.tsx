import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const LogOutIcon = (props: IconProps) => {
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
        d='M16 17.0003L21 12.0003M21 12.0003L16 7.00031M21 12.0003H9M12 17.0003C12 17.2959 12 17.4437 11.989 17.5717C11.8748 18.9023 10.8949 19.9972 9.58503 20.2576C9.45903 20.2826 9.31202 20.299 9.01835 20.3316L7.99694 20.4451C6.46248 20.6156 5.69521 20.7008 5.08566 20.5058C4.27293 20.2457 3.60942 19.6518 3.26118 18.8728C3 18.2885 3 17.5165 3 15.9726V8.028C3 6.48407 3 5.71211 3.26118 5.12783C3.60942 4.34879 4.27293 3.75491 5.08566 3.49483C5.69521 3.29978 6.46246 3.38502 7.99694 3.55552L9.01835 3.66901C9.31212 3.70165 9.45901 3.71797 9.58503 3.74303C10.8949 4.00346 11.8748 5.09835 11.989 6.42891C12 6.55694 12 6.70473 12 7.00031'
        stroke={theme.colors[props.color || 0] || props.color || '#1E1915'}
        strokeWidth={1.5}
        strokeLinejoin='round'
      />
    </svg>
  )
}
