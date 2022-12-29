import React                             from 'react'
import { FC }                            from 'react'

import { Condition }                     from '@ui/condition'
import { CircleCheckFilledIcon }         from '@ui/icons'
import { CircleInformationFilledIcon }   from '@ui/icons'
import { ErrorFilledIcon }               from '@ui/icons'
import { LoaderIcon }                    from '@ui/icons'
import { TriangleExclamationFilledIcon } from '@ui/icons'

import { Container }                     from './container'
import { IconProps }                     from './icon.interfaces'

const Icon: FC<IconProps> = ({ type }) => (
  <Container>
    <Condition match={type === 'info'}>
      <CircleInformationFilledIcon color='primary70' width={20} height={20} />
    </Condition>
    <Condition match={type === 'success'}>
      <CircleCheckFilledIcon color='success70' width={20} height={20} />
    </Condition>
    <Condition match={type === 'warning'}>
      <TriangleExclamationFilledIcon color='warning70' width={20} height={20} />
    </Condition>
    <Condition match={type === 'error'}>
      <ErrorFilledIcon color='error70' width={20} height={20} />
    </Condition>
    <Condition match={type === 'loading'}>
      <LoaderIcon color='gray40' width={20} height={20} />
    </Condition>
  </Container>
)

export { Icon }
