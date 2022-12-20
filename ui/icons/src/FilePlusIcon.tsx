import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const FilePlusIcon = (props: IconProps) => {
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
        d='M9.94513 1.25H14.0549C15.4225 1.24998 16.5248 1.24996 17.3918 1.36652C18.2919 1.48754 19.0497 1.74643 19.6517 2.34835C20.2536 2.95027 20.5125 3.70814 20.6335 4.60825C20.75 5.47522 20.75 6.57754 20.75 7.94513V11.25H19.25V8C19.25 6.56459 19.2484 5.56347 19.1469 4.80812C19.0482 4.07435 18.8678 3.68577 18.591 3.40901C18.3142 3.13225 17.9257 2.9518 17.1919 2.85315C16.4365 2.75159 15.4354 2.75 14 2.75H10C8.56459 2.75 7.56347 2.75159 6.80812 2.85315C6.07435 2.9518 5.68577 3.13225 5.40901 3.40901C5.13225 3.68577 4.9518 4.07435 4.85315 4.80812C4.75159 5.56347 4.75 6.56459 4.75 8V16C4.75 17.4354 4.75159 18.4365 4.85315 19.1919C4.9518 19.9257 5.13225 20.3142 5.40901 20.591C5.68577 20.8678 6.07435 21.0482 6.80812 21.1469C7.56347 21.2484 8.56459 21.25 10 21.25H12.75V22.75H9.94513C8.57754 22.75 7.47522 22.75 6.60825 22.6335C5.70814 22.5125 4.95027 22.2536 4.34835 21.6517C3.74643 21.0497 3.48754 20.2919 3.36652 19.3918C3.24996 18.5248 3.24998 17.4225 3.25 16.0549V7.94513C3.24998 6.57754 3.24996 5.47522 3.36652 4.60825C3.48754 3.70814 3.74643 2.95027 4.34835 2.34835C4.95027 1.74643 5.70814 1.48754 6.60825 1.36652C7.47522 1.24996 8.57754 1.24998 9.94513 1.25ZM18.75 14.25V17.25H21.75V18.75H18.75V21.75H17.25V18.75H14.25V17.25H17.25V14.25H18.75Z'
        fill={theme.colors[props.color || 0] || props.color || '#1E1915'}
      />
    </svg>
  )
}
