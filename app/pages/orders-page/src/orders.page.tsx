import React           from 'react'

import { Controls }    from '@app/controls-fragment'
import { OrdersTable } from '@app/orders-table-fragment'
import { Search }      from '@app/search-fragment'
import { Sidebar }     from '@app/sidebar-fragment'
import { Box }         from '@ui/layout'
import { Row }         from '@ui/layout'

const OrdersPage = () => (
  <Row>
    <Sidebar />
    <Box flexDirection='column' backgroundColor='white' fill>
      <Search />
      <Controls />
      <OrdersTable />
    </Box>
  </Row>
)

export { OrdersPage }
