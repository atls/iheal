import React             from 'react'
import { FC }            from 'react'
import { useState }      from 'react'
import { useIntl }       from 'react-intl'

import { Condition }     from '@ui/condition'
import { Box }           from '@ui/layout'
import { Row }           from '@ui/layout'
import { Column }        from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Tabs }          from '@ui/tabs'

import { ControlName }   from './controls.interface'
import { ButtonFilters } from './filters'
import { Filters }       from './filters'

const Controls: FC = () => {
  const { formatMessage } = useIntl()

  const [selectedTab, setSelectedTab] = useState<string>(ControlName.ALL)
  const [openFilters, setOpenFilters] = useState<boolean>(false)

  const tabs = [
    {
      id: ControlName.ALL,
      title: formatMessage({ id: 'controls.all' }),
    },
    {
      id: ControlName.EXPRESS,
      title: formatMessage({ id: 'controls.express' }),
    },
    {
      id: ControlName.WARRANTY,
      title: formatMessage({ id: 'controls.warranty' }),
    },
    {
      id: ControlName.ONSITE,
      title: formatMessage({ id: 'controls.onsite' }),
    },
  ]

  return (
    <Box width='100%' backgroundColor='white'>
      <Layout flexBasis={24} flexShrink={0} />
      <Column fill>
        <Row>
          <Layout width={365}>
            <Tabs tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          </Layout>
          <Layout flexGrow={1} />
          <Layout width={160}>
            <ButtonFilters openFilters={openFilters} setOpenFilters={setOpenFilters} />
          </Layout>
        </Row>
        <Condition match={openFilters}>
          <Layout flexBasis={16} />
          <Row>
            <Filters />
          </Row>
        </Condition>
        <Layout flexBasis={16} />
      </Column>
      <Layout flexBasis={24} flexShrink={0} />
    </Box>
  )
}

export { Controls }
