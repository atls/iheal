export interface Action {
  type: string
  id: string
  payload: {
    id: string
    type: 'info' | 'success' | 'warning' | 'error' | 'loading'
    message: string
  }
}
