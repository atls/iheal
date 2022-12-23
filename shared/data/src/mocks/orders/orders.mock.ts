import { faker }         from '@faker-js/faker/locale/ru'

import { ClientReview }  from './orders.interface'
import { OrderStatus }   from './orders.interface'
import { Orders }        from './orders.interface'
import { getRandomItem } from '../../helpers'

const statuses = [
  OrderStatus.NEW,
  OrderStatus.READY,
  OrderStatus.CLOSED,
  OrderStatus.FAILURE,
  OrderStatus.READY,
  OrderStatus.WAITING,
]
const clientReviews = [ClientReview.GREAT, ClientReview.GOOD, ClientReview.BAD]

const ordersMock: Orders[] = [...Array(10)].map(() => ({
  id: faker.datatype.uuid(),
  orderLink: faker.lorem.word(4),
  photo: faker.image.business(),
  status: getRandomItem(statuses) as string,
  creator: {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  },
  deadline: 'faker.date.soon(10, new Date())',
  client: {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phone: faker.phone.number('+7 980 ##-##-##'),
    review: getRandomItem(clientReviews) as string,
  },
  group: 'Часы',
  technique: faker.lorem.words(5),
  clientAddress: 'г. Москва',
  amount: faker.commerce.price(450, 5000, 0),
  performer: {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  },
}))

export { ordersMock }
