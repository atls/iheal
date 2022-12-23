import React               from 'react'
import { useEffect }       from 'react'
import { useMemo }         from 'react'
import { useState }        from 'react'

import { Orders }          from '@shared/data'
import { Box }             from '@ui/layout'
import { useMockedOrders } from '@shared/data'

import { Styles }          from './styles'
import { Table }           from './table'

const OrdersTable = () => {
  const { orders: ordersData } = useMockedOrders()

  const [orders, setOrders] = useState<Orders[]>([])

  useEffect(() => {
    setOrders(ordersData)
  }, [ordersData])

  const data = useMemo(() => [...orders], [orders])

  const columns = React.useMemo(
    () => [
      {
        Header: 'Заказ #',
        accessor: 'orderLink',
        width: 80,
      },
      {
        Header: 'Фото',
        width: 72,
        accessor: 'photo',
      },
      {
        Header: 'Статус',
        accessor: 'status',
        width: 140,
      },
      {
        Header: 'Создал',
        accessor: 'creator.firstName',
        width: 200,
      },
      {
        Header: 'Срок',
        accessor: 'deadline',
        width: 120,
      },
      {
        Header: 'Клиент',
        accessor: 'client.firstName',
        width: 260,
      },
      {
        Header: 'Техника',
        accessor: 'technique',
        width: 200,
      },
      {
        Header: 'Группа',
        accessor: 'group',
        width: 200,
      },
      {
        Header: 'Адрес клиента',
        accessor: 'clientAddress',
      },
      {
        Header: 'Исполнитель',
        accessor: 'performer.firstName',
      },
      {
        Header: 'Сумма',
        accessor: 'amount',
        width: 200,
      },
    ],
    []
  )

  return (
    <Box maxWidth='calc(100vw - 260px)'>
      <Styles>
        <Table columns={columns} data={data} />
      </Styles>
    </Box>
  )
}

export { OrdersTable }
