import React           from 'react'
import { FC }          from 'react'
import { useState }    from 'react'
import { useIntl }     from 'react-intl'

import { Box }         from '@ui/layout'
import { Row }         from '@ui/layout'
import { Column }      from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Tabs }        from '@ui/tabs'

import { ControlName } from './controls.interface'
import { Filters }     from './filters'

const Controls: FC = () => {
  const { formatMessage } = useIntl()

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

  const [selectedTab, setSelectedTab] = useState<string>(ControlName.ALL)

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
            <Filters />
          </Layout>
        </Row>
        <Layout flexBasis={16} />
      </Column>
      <Layout flexBasis={24} flexShrink={0} />
    </Box>
  )
}

export { Controls }
