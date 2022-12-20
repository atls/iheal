import styled            from '@emotion/styled'

import { createElement } from 'react'
import { color }         from 'styled-system'

interface InfiniteProps {
  count?: number
}

const Span = styled('span')(
  () => ({
    display: 'inline-flex',
  }),
  color
)

const Infinite = ({ count = 1 }: InfiniteProps) => createElement(Span, {}, '∞'.repeat(count))

export { Infinite }
