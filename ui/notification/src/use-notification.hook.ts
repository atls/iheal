import { nanoid }                      from 'nanoid'

import { useNotification as useStore } from './context'

const useNotification = () => {
  const notify = useStore()

  return (args) =>
    notify({
      type: 'ADD_NOTIFICATION',
      payload: {
        id: nanoid(15),
        ...args,
      },
    })
}

export { useNotification }
