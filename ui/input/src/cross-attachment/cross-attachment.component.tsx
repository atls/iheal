import styled                   from '@emotion/styled'
import { ConditionalRender }    from '@atls-ui-parts/conditional-render'

import React                    from 'react'
import { FC }                   from 'react'
import { useMemo }              from 'react'
import { forwardRef }           from 'react'

import { GhostButton }          from '@ui/button'
import { Condition }            from '@ui/condition'
import { XCloseIcon }           from '@ui/icons'

import { CrossAttachmentProps } from './cross-attachment.interface'
import { baseStyles }           from './cross-attachment.styles'
import { positionStyles }       from './cross-attachment.styles'

const CrossAttachment: FC<CrossAttachmentProps> = forwardRef((
  { value, type, focus, setValue },
  ref
) => {
  const Attachment = useMemo(() => styled(ConditionalRender())(baseStyles, positionStyles), [])

  return type === 'search' && value.length ? (
    <Attachment>
      <Condition match={value.length}>
        <GhostButton
          onClick={() => setValue('')}
          // @ts-ignore
          ref={ref as any}
        >
          <XCloseIcon width={24} height={24} />
        </GhostButton>
      </Condition>
    </Attachment>
  ) : null
})

export { CrossAttachment }
