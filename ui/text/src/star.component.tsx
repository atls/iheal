import styled            from '@emotion/styled'

import { createElement } from 'react'
import { color }         from 'styled-system'

interface StarProps {
  count?: number
}

const Span = styled('span')(
  () => ({
    display: 'inline-flex',
  }),
  color
)

const Star = ({ count = 1 }: StarProps) => createElement(Span, {}, '*'.repeat(count))

export { Star }
