import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const MaterialsIcon = (props: IconProps) => {
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
        d='M6.75 4.5C6.75 2.70507 8.20507 1.25 10 1.25C11.7949 1.25 13.25 2.70507 13.25 4.5V5.25H13.5266C14.203 5.24999 14.7485 5.24999 15.1925 5.28028C15.6491 5.31144 16.0528 5.37711 16.4351 5.53545C17.3539 5.91605 18.0839 6.64608 18.4645 7.56494C18.6229 7.94721 18.6886 8.35092 18.7197 8.80748C18.7384 9.08088 18.7455 9.39278 18.7483 9.75H19.5C21.2949 9.75 22.75 11.2051 22.75 13C22.75 14.7949 21.2949 16.25 19.5 16.25H18.75V17.2321C18.75 18.045 18.75 18.7006 18.7066 19.2315C18.662 19.7781 18.5676 20.2582 18.3413 20.7025C17.9818 21.4081 17.4081 21.9817 16.7025 22.3413C16.2582 22.5676 15.7781 22.662 15.2315 22.7066C14.7006 22.75 14.045 22.75 13.2321 22.75H12.5C12.0858 22.75 11.75 22.4142 11.75 22V20.25C11.75 19.4216 11.0784 18.75 10.25 18.75C9.42157 18.75 8.75 19.4216 8.75 20.25V22C8.75 22.4142 8.41421 22.75 8 22.75H6.76788C5.95505 22.75 5.29944 22.75 4.76853 22.7066C4.2219 22.662 3.74175 22.5676 3.29754 22.3413C2.59193 21.9817 2.01825 21.4081 1.65873 20.7025C1.43239 20.2582 1.33803 19.7781 1.29336 19.2315C1.24999 18.7006 1.24999 18.0449 1.25 17.2321L1.25 15.5C1.25 15.0858 1.58579 14.75 2 14.75H3.5C4.4665 14.75 5.25 13.9665 5.25 13C5.25 12.0335 4.4665 11.25 3.5 11.25H2C1.58579 11.25 1.25 10.9142 1.25 10.5L1.25 10.4734C1.25 9.79704 1.24999 9.25149 1.28029 8.80748C1.31144 8.35092 1.37711 7.94721 1.53545 7.56494C1.91605 6.64608 2.64608 5.91605 3.56494 5.53545C3.94721 5.37711 4.35092 5.31144 4.80748 5.28028C5.25148 5.24999 5.79704 5.24999 6.47336 5.25H6.75V4.5ZM10 2.75C9.0335 2.75 8.25 3.5335 8.25 4.5V6C8.25 6.41421 7.91421 6.75 7.5 6.75H6.5C5.79083 6.75 5.29651 6.75041 4.90959 6.77681C4.5294 6.80274 4.308 6.85125 4.13896 6.92127C3.58765 7.14963 3.14963 7.58765 2.92127 8.13896C2.85125 8.308 2.80275 8.5294 2.77681 8.90959C2.76089 9.14284 2.75442 9.41513 2.7518 9.75H3.5C5.29493 9.75 6.75 11.2051 6.75 13C6.75 14.7949 5.29493 16.25 3.5 16.25H2.75V17.2C2.75 18.0525 2.75058 18.6467 2.78838 19.1093C2.82547 19.5632 2.8946 19.824 2.99524 20.0215C3.21095 20.4448 3.55516 20.789 3.97852 21.0048C4.17604 21.1054 4.4368 21.1745 4.89068 21.2116C5.35331 21.2494 5.94755 21.25 6.8 21.25H7.25V20.25C7.25 18.5931 8.59315 17.25 10.25 17.25C11.9069 17.25 13.25 18.5931 13.25 20.25V21.25C14.0758 21.25 14.6558 21.2487 15.1093 21.2116C15.5632 21.1745 15.824 21.1054 16.0215 21.0048C16.4448 20.789 16.789 20.4448 17.0048 20.0215C17.1054 19.824 17.1745 19.5632 17.2116 19.1093C17.2494 18.6467 17.25 18.0525 17.25 17.2V15.5C17.25 15.0858 17.5858 14.75 18 14.75H19.5C20.4665 14.75 21.25 13.9665 21.25 13C21.25 12.0335 20.4665 11.25 19.5 11.25H18C17.5858 11.25 17.25 10.9142 17.25 10.5C17.25 9.79083 17.2496 9.29651 17.2232 8.90959C17.1973 8.5294 17.1487 8.308 17.0787 8.13896C16.8504 7.58765 16.4124 7.14963 15.861 6.92127C15.692 6.85125 15.4706 6.80275 15.0904 6.77681C14.7035 6.75041 14.2092 6.75 13.5 6.75H12.5C12.0858 6.75 11.75 6.41421 11.75 6V4.5C11.75 3.5335 10.9665 2.75 10 2.75Z'
        fill={theme.colors[props.color || 0] || props.color || '#1E1915'}
      />
    </svg>
  )
}
