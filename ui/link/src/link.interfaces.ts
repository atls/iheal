export type LinkColor = 'transparentBlue' | 'transparentRed' | 'transparentGrey'

export interface BaseLinkProps {
  active?: boolean
}

export interface LinkProps {
  children?: any
  keep?: boolean
  href?: string
  path: string
  variant?: LinkColor
}
