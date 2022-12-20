interface Notification {
  type: string
  id: string
}

export interface NotificationProps {
  notificationId: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error' | 'loading'
  dispatch: (item: Notification) => void
}
