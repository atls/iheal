import { ORDERS_ROUTE } from '@shared/data'

const getColor = (hover: boolean, router): string => {
  if (hover) return 'white'
  if (router.route !== ORDERS_ROUTE) return 'grayscale6'

  return 'primaryLight'
}

export { getColor }
