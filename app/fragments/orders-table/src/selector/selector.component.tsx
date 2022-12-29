import React                   from 'react'
import { FC }                  from 'react'
import { FormattedMessage }    from 'react-intl'
import { useState }            from 'react'
import { useIntl }             from 'react-intl'

import { Button }              from '@ui/button'
import { StatesConsumer }      from '@ui/button'
import { GhostButton }         from '@ui/button'
import { TrashIcon }           from '@ui/icons'
import { PlusIcon }            from '@ui/icons'
import { XCloseIcon }          from '@ui/icons'
import { Box }                 from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Column }              from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Select }              from '@ui/select'
import { Space }               from '@ui/text'
import { Text }                from '@ui/text'
import { resetOrderIdsAction } from '@app/store'
import { useSelectedOrderIds } from '@app/store'
import { getColor }            from '@ui/button'

const Selector: FC = ({ data }) => {
  const { formatMessage } = useIntl()

  const ids = useSelectedOrderIds()

  const [performer, setPerformer] = useState<string>('')

  return (
    <Box
      width='calc(100vw - 260px)'
      minHeight={64}
      marginTop='auto'
      backgroundColor='white'
      boxShadow='shSmall2'
      borderRadius='top12'
      borderTop='gray20'
      position='fixed'
      alignItems='center'
      bottom={0}
    >
      <Layout flexBasis={24} flexShrink={0} />
      <Column fill>
        <Layout flexBasis={20} flexShrink={0} />
        <Row>
          <Layout>
            <GhostButton onClick={resetOrderIdsAction}>
              <XCloseIcon color='black' width={24} height={24} />
            </GhostButton>
          </Layout>
          <Layout flexBasis={8} flexShrink={0} />
          <Layout alignItems='center'>
            <Layout>
              <Text
                color='black'
                fontWeight='medium'
                fontSize='normal.semiReduced'
                lineHeight='small'
              >
                <FormattedMessage id='orders_table.selected' />
              </Text>
            </Layout>
            <Space />
            <Layout>
              <Text
                color='black'
                fontWeight='medium'
                fontSize='normal.semiReduced'
                lineHeight='small'
              >
                {ids.length}
              </Text>
            </Layout>
            <Space />
            <Layout>
              <Text
                color='black'
                fontWeight='medium'
                fontSize='normal.semiReduced'
                lineHeight='small'
              >
                <FormattedMessage id='orders_table.of' />
              </Text>
            </Layout>
            <Space />
            <Layout>
              <Text
                color='black'
                fontWeight='medium'
                fontSize='normal.semiReduced'
                lineHeight='small'
              >
                {data.length}
              </Text>
            </Layout>
          </Layout>
          <Layout flexBasis={20} />
          <Layout>
            <Button size='sm'>
              <Layout>
                <PlusIcon color='white' width={20} height={20} />
              </Layout>
              <Space />
              <Text fontWeight='semiBold' lineHeight='extra'>
                <FormattedMessage id='orders_table.create_invoice' />
              </Text>
            </Button>
          </Layout>
          <Layout flexBasis={20} />
          <Layout width={245}>
            <Select
              items={['Имя фамилия', 'Имя фамилия 2']}
              placement='top-center'
              sizes='smallSecondary'
              colors='secondary'
              value={performer}
              onChange={setPerformer}
              placeholder={formatMessage({ id: 'orders_table.appoint_an_performer' })}
            />
          </Layout>
          <Layout flexGrow={1} />
          <Layout>
            <Button variant='red' size='sm'>
              <StatesConsumer>
                {({ hover, pressed }) => (
                  <Layout>
                    <TrashIcon color={getColor('red', hover, pressed)} />
                  </Layout>
                )}
              </StatesConsumer>
              <Space />
              <FormattedMessage id='orders_table.remove' />
            </Button>
          </Layout>
        </Row>
        <Layout flexBasis={20} flexShrink={0} />
      </Column>
      <Layout flexBasis={24} flexShrink={0} />
    </Box>
  )
}

export { Selector }
