import styled               from '@emotion/styled'

import React                from 'react'
import { FC }               from 'react'

import { Condition }        from '@ui/condition'
import { Space }            from '@ui/text'
import { Star }             from '@ui/text'
import { Text }             from '@ui/text'

import { LabelContainer }   from './label-container'
import { LabelProps }       from './label.interface'
import { baseStyles }       from './label.styles'
import { shapeStyles }      from './label.styles'
import { appearanceStyles } from './label.styles'

const LabelComponent = styled(Text.withComponent('label'))(
  baseStyles,
  appearanceStyles,
  shapeStyles
)

const isValid = (children: string): boolean => !(typeof children === 'string' && children === '')

const Label: FC<LabelProps> = ({ children, required }) =>
  isValid(children) ? (
    <LabelContainer>
      <LabelComponent>
        {children}
        <Condition match={required}>
          <Space />
          <Text color='error50'>
            <Star />
          </Text>
        </Condition>
      </LabelComponent>
    </LabelContainer>
  ) : null

export { Label }
