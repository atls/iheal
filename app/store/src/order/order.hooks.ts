import { useReactiveVar } from '@apollo/client'

import { OrderIds }       from './order.interfaces'
import { orderIdsVar }    from './order.vars'

export const useSelectedOrderIds = () => useReactiveVar<OrderIds>(orderIdsVar)
