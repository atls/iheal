import React                   from 'react'
import { useEffect }           from 'react'
import { useMemo }             from 'react'
import { useState }            from 'react'

import { Orders }              from '@shared/data'
import { Condition }           from '@ui/condition'
import { Column }              from '@ui/layout'
import { Layout }              from '@ui/layout'
import { useSelectedOrderIds } from '@app/store'
import { useMockedOrders }     from '@shared/data'

import { Selector }            from './selector'
import { Styles }              from './styles'
import { Table }               from './table'

const OrdersTable = () => {
  const { orders: ordersData } = useMockedOrders()
  const ids = useSelectedOrderIds()

  const [orders, setOrders] = useState<Orders[]>([])

  useEffect(() => {
    setOrders(ordersData)
  }, [ordersData])

  const data = useMemo(() => [...orders], [orders])

  const columns = React.useMemo(() => [], [])

  return (
    <Column maxWidth='calc(100vw - 260px)'>
      <Styles>
        <Table columns={columns} data={data} />
      </Styles>
      <Condition match={Boolean(ids.length)}>
        <Layout flexBasis={80} />
        <Selector data={data} />
      </Condition>
    </Column>
  )
}

export { OrdersTable }
