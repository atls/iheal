import styled                          from '@emotion/styled'
import { ConditionalRender }           from '@atls-ui-parts/conditional-render'

import React                           from 'react'
import { FC }                          from 'react'
import { useMemo }                     from 'react'

import { Condition }                   from '@ui/condition'
import { EyeOffFilledIcon }            from '@ui/icons'
import { EyeOnFilledIcon }             from '@ui/icons'

import { ShowPasswordAttachmentProps } from './show-password-attachment.interface'
import { baseStyles }                  from './show-password-attachment.styles'
import { positionStyles }              from './show-password-attachment.styles'

const ShowPasswordAttachment: FC<ShowPasswordAttachmentProps> = ({ type, hidden, setHidden }) => {
  const Attachment = useMemo(() => styled(ConditionalRender())(baseStyles, positionStyles), [])

  return type === 'password' ? (
    <Attachment onClick={() => setHidden(!hidden)}>
      <Condition match={hidden}>
        <EyeOnFilledIcon cursor='pointer' color='gray40' width={20} height={20} />
      </Condition>
      <Condition match={!hidden}>
        <EyeOffFilledIcon cursor='pointer' color='gray40' width={20} height={20} />
      </Condition>
    </Attachment>
  ) : null
}

export { ShowPasswordAttachment }
