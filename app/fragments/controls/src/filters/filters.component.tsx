import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { useState }         from 'react'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { GhostButton }      from '@ui/button'
import { XCloseIcon }       from '@ui/icons'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Select }           from '@ui/select'
import { Text }             from '@ui/text'

const Filters: FC = () => {
  const { formatMessage } = useIntl()

  const [status, setStatus] = useState<string>('')
  const [orderType, setOrderType] = useState<string>('')

  return (
    <Box width='100%' backgroundColor='white' border='grayscale6' borderRadius='default'>
      <Layout flexBasis={16} flexShrink={0} />
      <Column fill>
        <Layout flexBasis={16} flexShrink={0} />
        <Row>
          <Row>
            <Select
              items={[
                formatMessage({ id: 'controls.new' }),
                formatMessage({ id: 'controls.in_work' }),
                formatMessage({ id: 'controls.ready' }),
                formatMessage({ id: 'controls.waiting' }),
                formatMessage({ id: 'controls.reject' }),
                formatMessage({ id: 'controls.closed' }),
              ]}
              multiselect
              value={status}
              onSelect={setStatus}
              placeholder={formatMessage({ id: 'controls.status' })}
            />
          </Row>
          <Layout flexBasis={24} flexShrink={0} />
          <Row>
            <Select
              items={['1', '2', '3']}
              value={orderType}
              onChange={setOrderType}
              placeholder={formatMessage({ id: 'controls.order_type' })}
            />
          </Row>
          <Layout flexBasis={24} flexShrink={0} />
          <Row>
            <Select
              items={['1', '2', '3']}
              value=''
              placeholder={formatMessage({ id: 'controls.order_created' })}
            />
          </Row>
        </Row>
        <Layout flexBasis={16} />
        <Row>
          <Row>
            <Select
              items={['1', '2', '3']}
              value=''
              placeholder={formatMessage({ id: 'controls.group' })}
            />
          </Row>
          <Layout flexBasis={24} flexShrink={0} />
          <Row>
            <Select
              items={['1', '2', '3']}
              value=''
              placeholder={formatMessage({ id: 'controls.brand' })}
            />
          </Row>
          <Layout flexBasis={24} flexShrink={0} />
          <Row>
            <Select
              items={['1', '2', '3']}
              value=''
              placeholder={formatMessage({ id: 'controls.model' })}
            />
          </Row>
        </Row>
        <Layout flexBasis={16} />
        <Row>
          <Row>
            <Select
              items={['1', '2', '3']}
              value=''
              placeholder={formatMessage({ id: 'controls.client' })}
            />
          </Row>
          <Layout flexBasis={24} flexShrink={0} />
          <Row>
            <Select
              items={['1', '2', '3']}
              value=''
              placeholder={formatMessage({ id: 'controls.manager' })}
            />
          </Row>
          <Layout flexBasis={24} flexShrink={0} />
          <Row>
            <Select
              items={['1', '2', '3']}
              value=''
              placeholder={formatMessage({ id: 'controls.performer' })}
            />
          </Row>
        </Row>
        <Layout flexBasis={24} />
        <Row>
          <Layout>
            <Button variant='secondary' size='sm'>
              <FormattedMessage id='controls.accept' />
            </Button>
          </Layout>
          <Layout flexBasis={16} />
          <Layout minWidth={171}>
            <GhostButton style={{ width: '100%' }}>
              <XCloseIcon width={16} height={16} />
              <Layout flexBasis={8} />
              <Text fontSize='small.semiLarge' lineHeight='small' fontWeight='semiBold'>
                <FormattedMessage id='controls.reset_params' />
              </Text>
            </GhostButton>
          </Layout>
        </Row>
        <Layout flexBasis={16} flexShrink={0} />
      </Column>
      <Layout flexBasis={16} flexShrink={0} />
    </Box>
  )
}

export { Filters }
