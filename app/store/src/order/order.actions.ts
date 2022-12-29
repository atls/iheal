import { orderIdsVar } from './order.vars'

export const selectAllOrdersAction = (orders) => {
  const orderIds = orders.map(({ id }) => id)

  orderIdsVar(orderIds)
}

export const resetOrderIdsAction = () => orderIdsVar([])

export const unselectOrderAction = (orderIds: string[], id: string) =>
  orderIdsVar(orderIds.filter((item) => item !== id))

export const selectOrderAction = (orderIds: string[], id: string) => orderIdsVar([...orderIds, id])
