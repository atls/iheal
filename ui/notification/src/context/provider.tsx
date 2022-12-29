import React            from 'react'
import { motion }       from 'framer-motion'
import { useReducer }   from 'react'

import { Notification } from '../notification'
import { Context }      from './context'
import { Action }       from './types'

interface State {
  id: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error' | 'loading'
}

const NotificationProvider = ({ children }) => {
  const [notifications, dispatch] = useReducer<any>((state: State[], action: Partial<Action>) => {
    switch (action.type) {
      case 'ADD_NOTIFICATION':
        return [...state, { ...action.payload }]
      case 'REMOVE_NOTIFICATION':
        return state.filter((item) => item.id !== action.id)
      default:
        return state
    }
  }, [])

  return (
    <Context.Provider value={dispatch}>
      <motion.div
        style={{
          position: 'fixed',
          right: 0,
          top: 16,
          zIndex: 9999,
        }}
      >
        {Array.isArray(notifications) &&
          notifications.map(({ id, type, message }) => (
            <Notification
              dispatch={dispatch}
              key={id}
              notificationId={id}
              type={type}
              message={message}
            />
          ))}
      </motion.div>
      {children}
    </Context.Provider>
  )
}

export { NotificationProvider }
