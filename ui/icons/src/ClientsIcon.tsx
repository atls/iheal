import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const ClientsIcon = (props: IconProps) => {
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
        d='M16.0358 11.5322C17.5271 10.7959 18.5519 9.26686 18.5519 7.5C18.5519 5.73314 17.5271 4.20411 16.0358 3.46776M18 15.3149C20.0039 15.9347 21.746 17.0842 22.4218 19.0362C22.7832 20.08 21.8551 21 20.7506 21L19.5 21M14.0229 7.5C14.0229 9.98528 11.9953 12 9.494 12C6.99274 12 4.96506 9.98528 4.96506 7.5C4.96506 5.01472 6.99274 3 9.494 3C11.9953 3 14.0229 5.01472 14.0229 7.5ZM3.99998 21H15C16.1046 21 17.0326 20.08 16.6712 19.0362C16.0181 17.1498 14.3692 16.0128 12.4504 15.3792C11.5032 15.0664 10.4975 15 9.49999 15C8.50243 15 7.49677 15.0664 6.54952 15.3792C4.63079 16.0129 2.98183 17.1498 2.32873 19.0362C1.96735 20.08 2.89541 21 3.99998 21Z'
        stroke='black'
        strokeWidth={1.5}
        strokeLinecap='square'
      />
    </svg>
  )
}
