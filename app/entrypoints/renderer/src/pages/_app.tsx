import React                    from 'react'
import { IntlProvider }         from 'react-intl'

import { NotificationProvider } from '@ui/notification'
import { ThemeProvider }        from '@ui/theme'

import messages_ru              from '../../locales/ru.json'

const messages = {
  ru: messages_ru,
}

const App = ({ Component, pageProps, ...props }) => (
  <IntlProvider locale='ru' defaultLocale='ru' messages={messages.ru}>
    <ThemeProvider>
      <NotificationProvider>
        <Component {...pageProps} {...props} />
      </NotificationProvider>
    </ThemeProvider>
  </IntlProvider>
)

export default App
