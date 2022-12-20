import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const ZoomIcon = (props: IconProps) => {
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
        d='M11 3.69999C6.96837 3.69999 3.70005 6.96831 3.70005 11C3.70005 15.0317 6.96837 18.3 11 18.3C12.8802 18.3 14.5943 17.5892 15.8883 16.4218L16.4218 15.8883C17.5893 14.5942 18.3 12.8801 18.3 11C18.3 6.96831 15.0317 3.69999 11 3.69999ZM17.627 16.637C18.9198 15.1187 19.7001 13.1504 19.7001 11C19.7001 6.19511 15.8049 2.29999 11 2.29999C6.19517 2.29999 2.30005 6.19511 2.30005 11C2.30005 15.8049 6.19517 19.7 11 19.7C13.1505 19.7 15.1187 18.9198 16.6371 17.627L21 21.9899L21.99 21L17.627 16.637ZM11.7 7.29999V10.3H14.7V11.7H11.7V14.7H10.3V11.7H7.30005V10.3H10.3V7.29999H11.7Z'
        fill={theme.colors[props.color || 0] || props.color || '#1E1915'}
      />
    </svg>
  )
}
