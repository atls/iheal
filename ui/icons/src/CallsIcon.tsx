import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const CallsIcon = (props: IconProps) => {
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
        d='M7.19763 17.0907L7.19676 17.0899C4.57378 14.5836 2.75427 11.3922 1.95881 7.90164L1.95855 7.9005L1.95856 7.9005C1.86156 7.45061 1.88538 6.98404 2.02768 6.54576C2.1699 6.1077 2.42561 5.71289 2.76991 5.3991L5.0848 3.2345L5.08544 3.2339L5.08544 3.2339C5.21403 3.11576 5.36663 3.02545 5.53322 2.9687C5.69981 2.91195 5.87676 2.88999 6.05256 2.9042L6.05459 2.90436L6.05459 2.90438C6.23688 2.92286 6.41293 2.97992 6.57036 3.07168C6.7278 3.16346 6.86288 3.28777 6.96594 3.43604L9.86007 7.59171L9.86098 7.59301L9.86097 7.59302C9.98163 7.77229 10.0401 7.9848 10.0273 8.19923C10.0145 8.41366 9.93124 8.61806 9.79024 8.78243L9.79011 8.78257L8.37949 10.4205C8.95097 11.6297 9.7529 12.7232 10.7433 13.6433L10.7448 13.6448L10.7448 13.6448C11.731 14.6004 12.8944 15.3663 14.1736 15.902L15.9279 14.5484L15.928 14.5483C16.0952 14.4199 16.2982 14.3443 16.5102 14.331C16.7221 14.3177 16.9334 14.3674 17.1159 14.4737L17.1188 14.4754L17.1188 14.4754L21.4875 17.2187C21.6497 17.3131 21.7881 17.442 21.8923 17.5959C21.9969 17.7503 22.0642 17.9259 22.0892 18.1096C22.1141 18.2932 22.0959 18.4799 22.036 18.6557C21.9761 18.8314 21.8762 18.9915 21.7439 19.1239L21.7425 19.1254L21.7424 19.1253L19.4852 21.2958C19.2193 21.5529 18.9038 21.7562 18.5571 21.8941C18.2104 22.032 17.8392 22.102 17.4647 22.1C17.4646 22.1 17.4645 22.1 17.4644 22.1L17.465 22C17.2703 21.9994 17.0763 21.9787 16.8861 21.9381L7.19763 17.0907ZM7.19763 17.0907C9.87712 19.5908 13.2285 21.3049 16.8658 22.036L7.19763 17.0907ZM20.6664 18.2714L18.5012 20.3533L18.5011 20.3534C18.3261 20.5222 18.1104 20.6464 17.8734 20.7145C17.6363 20.7827 17.3854 20.7927 17.1434 20.7435L17.1431 20.7435C13.7552 20.0635 10.6341 18.4679 8.13914 16.1407C5.71167 13.8105 4.03106 10.8475 3.29996 7.60996L3.20241 7.63199C3.14799 7.38977 3.15939 7.13796 3.23551 6.90132C3.31163 6.66468 3.44984 6.45137 3.63654 6.28236L5.87813 4.18629L5.93613 4.26896M20.6664 18.2714L3.29998 7.61007C3.24947 7.38528 3.26005 7.15161 3.33071 6.93194C3.40137 6.71225 3.52979 6.51388 3.70365 6.35649L3.70366 6.3565L3.70484 6.3554L5.93613 4.26896M20.6664 18.2714L16.6143 15.7279L14.7362 17.181L14.7359 17.1812C14.6491 17.248 14.547 17.2929 14.4386 17.3124C14.3302 17.3318 14.2185 17.3253 14.1133 17.2932L14.1087 17.2918L14.1087 17.2917C12.4906 16.7124 11.0238 15.7931 9.81345 14.599C8.56167 13.4629 7.58976 12.0668 6.97038 10.5145L6.96637 10.5045L6.96694 10.5043C6.93622 10.3942 6.9352 10.2782 6.96397 10.1675C6.99247 10.0579 7.04916 9.95756 7.12836 9.87571L8.6385 8.1206L5.93613 4.26896M20.6664 18.2714L5.93613 4.26896'
        fill={theme.colors[props.color || 0] || props.color || '#1E1915'}
        stroke={theme.colors[props.color || 0] || props.color || '#1E1915'}
        strokeWidth={0.2}
      />
    </svg>
  )
}
