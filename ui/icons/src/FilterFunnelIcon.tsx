import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const FilterFunnelIcon = (props: IconProps) => {
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
        d='M3 3.75C2.86193 3.75 2.75 3.86193 2.75 4V6.54623C2.75 6.61832 2.78112 6.6869 2.83537 6.73438L10.1524 13.1368C10.5322 13.4691 10.75 13.9491 10.75 14.4538V19.7865L13.25 18.5365V14.4538C13.25 13.9491 13.4678 13.4691 13.8476 13.1368L21.1646 6.73438C21.2189 6.6869 21.25 6.61832 21.25 6.54623V4C21.25 3.86193 21.1381 3.75 21 3.75H3ZM1.25 4C1.25 3.0335 2.0335 2.25 3 2.25H21C21.9665 2.25 22.75 3.0335 22.75 4V6.54623C22.75 7.05087 22.5322 7.53094 22.1524 7.86324L14.8354 14.2656C14.7811 14.3131 14.75 14.3817 14.75 14.4538V19.4635L9.25 22.2135V14.4538C9.25 14.3817 9.21888 14.3131 9.16463 14.2656L1.84762 7.86324C1.46784 7.53094 1.25 7.05087 1.25 6.54623V4Z'
        fill={theme.colors[props.color || 0] || props.color || '#1E1915'}
      />
    </svg>
  )
}
