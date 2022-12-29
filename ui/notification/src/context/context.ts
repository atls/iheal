import { createContext } from 'react'

import { Action }        from './types'

type ContextValue = (action: Partial<Action>) => void

const Context = createContext<ContextValue>(() => undefined)

export { Context }
