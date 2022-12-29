import { makeVar }  from '@apollo/client'

import { OrderIds } from './order.interfaces'

export const orderIdsVar = makeVar<OrderIds>([])
