import React          from 'react'
import { FC }         from 'react'

import { Condition }  from '@ui/condition'
import { Space }      from '@ui/text'
import { Star }       from '@ui/text'
import { Text }       from '@ui/text'

import { LabelProps } from './label.interface'

const Label: FC<LabelProps> = ({ children, required }) => (
  <Text
    fontSize='normal.semiReduced'
    fontWeight='medium'
    lineHeight='medium'
    color='gray70'
    whiteSpace='nowrap'
  >
    {children}
    <Condition match={required}>
      <Space />
      <Text color='error50'>
        <Star />
      </Text>
    </Condition>
  </Text>
)

export { Label }
