import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const PaperclipIcon = (props: IconProps) => {
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
      <g clipPath='url(#clip0_95_5790)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M2.8373 21.0366C0.201263 18.4006 0.201263 14.1267 2.8373 11.4907L12.0297 2.29831C13.8847 0.443323 16.8922 0.443323 18.7472 2.29831C20.6022 4.1533 20.6022 7.16084 18.7472 9.01583L9.55482 18.2082C8.48087 19.2822 6.73967 19.2822 5.66573 18.2082C4.59179 17.1343 4.59179 15.3931 5.66573 14.3191L14.151 5.83385L15.2117 6.89451L6.72639 15.3798C6.23823 15.8679 6.23823 16.6594 6.72639 17.1476C7.21454 17.6357 8.006 17.6357 8.49416 17.1476L17.6865 7.95517C18.9557 6.68596 18.9557 4.62818 17.6865 3.35897C16.4173 2.08977 14.3596 2.08977 13.0903 3.35897L3.89796 12.5514C1.84771 14.6016 1.84771 17.9257 3.89796 19.976C5.94821 22.0262 9.27233 22.0262 11.3226 19.976L19.8079 11.4907L20.8685 12.5514L12.3832 21.0366C9.7472 23.6727 5.47334 23.6727 2.8373 21.0366Z'
          fill={theme.colors[props.color || 0] || props.color || '#1E1915'}
        />
      </g>
      <defs>
        <clipPath id='clip0_95_5790'>
          <rect width={24} height={24} fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
