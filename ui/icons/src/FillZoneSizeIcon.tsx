import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const FillZoneSizeIcon = (props: IconProps) => {
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
        d='M10.7071 3.70706L11.0607 3.35351C11.2559 3.15824 11.2559 2.84166 11.0607 2.6464L10.3536 1.93929C10.1583 1.74403 9.84172 1.74403 9.64646 1.93929L9.29291 2.29285L2.79291 8.79285L2.43935 9.1464C2.24409 9.34166 2.24409 9.65824 2.43935 9.85351L3.14646 10.5606C3.34172 10.7559 3.65831 10.7559 3.85357 10.5606L4.20712 10.2071L10.7071 3.70706ZM11.7071 8.70706L12.0607 8.35351C12.2559 8.15824 12.2559 7.84166 12.0607 7.6464L11.3536 6.93929C11.1583 6.74403 10.8417 6.74403 10.6465 6.93929L10.2929 7.29285L7.29291 10.2928L6.93935 10.6464C6.74409 10.8417 6.74409 11.1582 6.93935 11.3535L7.64646 12.0606C7.84172 12.2559 8.15831 12.2559 8.35357 12.0606L8.70712 11.7071L11.7071 8.70706Z'
        fill={theme.colors[props.color || 0] || props.color || '#1E1915'}
      />
    </svg>
  )
}
