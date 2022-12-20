import styled  from '@emotion/styled'

import { Box } from '@ui/layout'

interface TransitionBoxProps {
  transition: number
}

const TransitionBox = styled(Box)(({ transition }: TransitionBoxProps) => ({
  transition: `${transition}s`,
}))

export { TransitionBox }
