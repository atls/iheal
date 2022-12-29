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

import { FiltersProps }     from './filters.interface'

const Filters: FC<FiltersProps> = ({ setOpenFilters }) => {
  const { formatMessage } = useIntl()

  const [status, setStatus] = useState<string[]>([])
  const [orderType, setOrderType] = useState<string[]>([])
  const [orderCreated, setOrderCreated] = useState<string>('')
  const [group, setGroup] = useState<string>('')
  const [brand, setBrand] = useState<string[]>([])
  const [model, setModel] = useState<string>('')
  const [client, setClient] = useState<string>('')
  const [manager, setManager] = useState<string>('')
  const [performer, setPerformer] = useState<string>('')
  const [isReset, setIsReset] = useState<boolean>(false)

  const handleResetValues = () => {
    setStatus([])
    setOrderType([])
    setOrderCreated('')
    setGroup('')
    setBrand([])
    setModel('')
    setClient('')
    setManager('')
    setPerformer('')
    setIsReset(true)
    setTimeout(() => {
      setIsReset(false)
    })
  }
  console.log(group)
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
              resetter={isReset}
              menuVariant='secondary'
              value={status}
              onSelect={setStatus}
              placeholder={formatMessage({ id: 'controls.status' })}
            />
          </Row>
          <Layout flexBasis={24} flexShrink={0} />
          <Row>
            <Select
              items={[
                formatMessage({ id: 'controls.express' }),
                formatMessage({ id: 'controls.warranty' }),
                formatMessage({ id: 'controls.onsite' }),
              ]}
              value={orderType}
              multiselect
              menuVariant='primary'
              onSelect={setOrderType}
              resetter={isReset}
              placeholder={formatMessage({ id: 'controls.order_type' })}
            />
          </Row>
          <Layout flexBasis={24} flexShrink={0} />
          <Row>
            <Select
              items={[
                formatMessage({ id: 'controls.all_time' }),
                formatMessage({ id: 'controls.today' }),
                formatMessage({ id: 'controls.yesterday' }),
                formatMessage({ id: 'controls.this_week' }),
                formatMessage({ id: 'controls.that_month' }),
                formatMessage({ id: 'controls.last_week' }),
              ]}
              value={orderCreated}
              onChange={setOrderCreated}
              label={formatMessage({ id: 'controls.order_created' })}
              placeholder={formatMessage({ id: 'controls.order_created' })}
            />
          </Row>
        </Row>
        <Layout flexBasis={16} />
        <Row>
          <Row>
            <Select
              items={[
                formatMessage({ id: 'controls.all' }),
                formatMessage({ id: 'controls.table_clock' }),
                formatMessage({ id: 'controls.smart_clock' }),
                formatMessage({ id: 'controls.wristwatches' }),
              ]}
              label={formatMessage({ id: 'controls.group' })}
              value={group}
              onChange={setGroup}
              placeholder={formatMessage({ id: 'controls.group' })}
            />
          </Row>
          <Layout flexBasis={24} flexShrink={0} />
          <Row>
            <Select
              items={['Adriatica', 'Amen', 'Aviator', 'Balmain', 'Candino', 'Casio']}
              multiselect
              value={brand}
              onSelect={setBrand}
              resetter={isReset}
              placeholder={formatMessage({ id: 'controls.brand' })}
            />
          </Row>
          <Layout flexBasis={24} flexShrink={0} />
          <Row>
            <Select
              items={[
                formatMessage({ id: 'controls.male' }),
                formatMessage({ id: 'controls.female' }),
              ]}
              value={model}
              onChange={setModel}
              placeholder={formatMessage({ id: 'controls.model' })}
            />
          </Row>
        </Row>
        <Layout flexBasis={16} />
        <Row>
          <Row>
            <Select
              items={['1', '2', '3']}
              value={client}
              onChange={setClient}
              label={formatMessage({ id: 'controls.client' })}
              placeholder={formatMessage({ id: 'controls.client' })}
            />
          </Row>
          <Layout flexBasis={24} flexShrink={0} />
          <Row>
            <Select
              items={['1', '2', '3']}
              value={manager}
              onChange={setManager}
              label={formatMessage({ id: 'controls.manager' })}
              placeholder={formatMessage({ id: 'controls.manager' })}
            />
          </Row>
          <Layout flexBasis={24} flexShrink={0} />
          <Row>
            <Select
              items={['1', '2', '3']}
              value={performer}
              onChange={setPerformer}
              label={formatMessage({ id: 'controls.performer' })}
              placeholder={formatMessage({ id: 'controls.performer' })}
            />
          </Row>
        </Row>
        <Layout flexBasis={24} />
        <Row>
          <Layout>
            <Button variant='secondary' size='sm' onClick={() => setOpenFilters((prev) => !prev)}>
              <FormattedMessage id='controls.accept' />
            </Button>
          </Layout>
          <Layout flexBasis={16} />
          <Layout minWidth={171}>
            <GhostButton style={{ width: '100%' }} onClick={handleResetValues}>
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
