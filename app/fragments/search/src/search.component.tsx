import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { useEffect }        from 'react'
import { useRef }           from 'react'
import { useState }         from 'react'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { Condition }        from '@ui/condition'
import { HelpIcon }         from '@ui/icons'
import { PlusIcon }         from '@ui/icons'
import { Input }            from '@ui/input'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { usePopover }       from '@ui/utils'

const Search: FC = () => {
  const { formatMessage } = useIntl()

  const [search, setSearch] = useState<string>('')
  const [popupWidth, setPopupWidth] = useState<number>(0)

  const { triggerProps, layerProps, setOpen, render } = usePopover('bottom-center', 8, 'click')

  const inputLayoutRef = useRef<HTMLDivElement | null>(null)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setPopupWidth(inputLayoutRef!.current!.clientWidth)
  })

  return (
    <Box borderRadius='topLeft16' width='100%' backgroundColor='white'>
      <Layout flexBasis={24} flexShrink={0} />
      <Column fill>
        <Layout flexBasis={24} flexShrink={0} />
        <Row>
          <Layout maxWidth={159}>
            <Button size='md'>
              <PlusIcon color='white' width={24} height={24} />
              <Layout flexBasis={10} />
              <FormattedMessage id='search.new_order' />
            </Button>
          </Layout>
          <Layout flexBasis={20} flexShrink={0} />
          <Row ref={inputLayoutRef} onClick={() => setOpen(true)}>
            <Row {...triggerProps}>
              <Input
                value={search}
                attachments={['search', 'buttonSearch']}
                onChange={setSearch}
                type='search'
                placeholder={formatMessage({ id: 'search.search' })}
              />
            </Row>
          </Row>
          {render(
            <Box
              width='100%'
              maxWidth={popupWidth}
              backgroundColor='white'
              border='grayscale6'
              boxShadow='shSmall'
              borderRadius='intermediate'
              {...layerProps}
            >
              <Condition match={search.length}>text</Condition>
            </Box>
          )}
          <Layout flexBasis={20} flexShrink={0} />
          <Layout width={48} height={48}>
            <Button variant='tertiary'>
              <HelpIcon width={24} height={24} />
            </Button>
          </Layout>
        </Row>
        <Layout flexBasis={24} flexShrink={0} />
      </Column>
      <Layout flexBasis={24} flexShrink={0} />
    </Box>
  )
}

export { Search }
