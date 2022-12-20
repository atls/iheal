import { useContext } from 'react'

import { Context }    from './context'

const useNotification = () => useContext(Context)

export { useNotification }
