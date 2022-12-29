import styled            from '@emotion/styled'

import { createElement } from 'react'
import { color }         from 'styled-system'

interface DashProps {
  count?: number
}

const Span = styled('span')(
  () => ({
    display: 'inline-flex',
  }),
  color
)

const Dash = ({ count = 1 }: DashProps) => createElement(Span, {}, '—'.repeat(count))

export { Dash }
