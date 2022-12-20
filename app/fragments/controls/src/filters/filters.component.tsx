import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { FilterFunnelIcon } from '@ui/icons'
import { TableIcon }        from '@ui/icons'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'

const Filters: FC = () => (
  <Box>
    <Layout width={112}>
      <Button variant='tertiary' size='sm'>
        <FilterFunnelIcon width={24} height={24} />
        <Layout flexBasis={8} />
        <FormattedMessage id='controls.filter' />
      </Button>
    </Layout>
    <Layout flexBasis={12} flexShrink={0} />
    <Layout width={40}>
      <Button variant='tertiary' size='sm' style={{ padding: 10 }}>
        <TableIcon width={24} height={24} />
      </Button>
    </Layout>
  </Box>
)

export { Filters }
