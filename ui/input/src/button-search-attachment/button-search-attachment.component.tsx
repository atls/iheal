import styled                          from '@emotion/styled'
import { ConditionalRender }           from '@atls-ui-parts/conditional-render'

import React                           from 'react'
import { FC }                          from 'react'
import { useMemo }                     from 'react'
import { forwardRef }                  from 'react'

import { Button }                      from '@ui/button'
import { Condition }                   from '@ui/condition'

import { ButtonSearchAttachmentProps } from './button-search-attachment.interface'
import { baseStyles }                  from './button-search-attachment.styles'
import { positionStyles }              from './button-search-attachment.styles'

const ButtonSearchAttachment: FC<ButtonSearchAttachmentProps> = forwardRef(({
  type,
  focus,
  attachments,
  value,
  setSearch,
}) => {
  const Attachment = useMemo(() => styled(ConditionalRender())(baseStyles, positionStyles), [])

  return attachments?.includes('buttonSearch') ? (
    <Attachment>
      <Condition match={focus}>
        <Button
          style={{ marginLeft: 16 }}
          size='sm'
          variant='secondary'
          onClick={() => (value!.trim() !== '' ? setSearch!(true) : setSearch!(false))}
        >
          Найти
        </Button>
      </Condition>
    </Attachment>
  ) : null
})

export { ButtonSearchAttachment }
