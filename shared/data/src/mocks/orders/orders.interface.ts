export interface Orders {
  id: string
  orderLink: string
  photo: string
  status: string
  creator: {
    firstName: string
    lastName: string
  }
  deadline: Date
  client: {
    firstName: string
    lastName: string
    phone: string
    review: string
  }
  group: string
  technique: string
  clientAddress: string
  amount: string
  performer: {
    firstName: string
    lastName: string
  }
}

// eslint-disable-next-line
export enum OrderStatus {
  NEW = 'NEW',
  READY = 'READY',
  IN_WORK = 'IN_WORK',
  WAITING = 'WAITING',
  FAILURE = 'FAILURE',
  CLOSED = 'CLOSED',
}

// eslint-disable-next-line
export enum ClientReview {
  GREAT = 'GREAT',
  GOOD = 'GOOD',
  BAD = 'BAD',
}
