import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { useRouter }        from 'next/router'

import { CONTACTS_ROUTE }   from '@shared/data'
import { FINANCE_ROUTE }    from '@shared/data'
import { ORDERS_ROUTE }     from '@shared/data'
import { STOCK_ROUTE }      from '@shared/data'
import { TransitionBox }    from '@ui/animation-layout'
import { Button }           from '@ui/button'
import { Divider }          from '@ui/divider'
import { ClientsIcon }      from '@ui/icons'
import { FinanceIcon }      from '@ui/icons'
import { HelpIcon }         from '@ui/icons'
import { LogOutIcon }       from '@ui/icons'
import { LogoIcon }         from '@ui/icons'
import { OrdersIcon }       from '@ui/icons'
import { ReportsIcon }      from '@ui/icons'
import { SettingsIcon }     from '@ui/icons'
import { WarehouseIcon }    from '@ui/icons'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { NextLink }         from '@ui/link'
import { NextNavLink }      from '@ui/link'
import { useHover }         from '@ui/utils'

import { getColor }         from './helpers'

const Sidebar: FC = () => {
  const router = useRouter()

  const [hover, hoverProps] = useHover()

  return (
    <Box height='100vh' position='sticky' top={0} minWidth={260} backgroundColor='grayscale7'>
      <Column fill>
        <Row>
          <Layout flexBasis={28} flexShrink={0} />
          <Column fill>
            <Layout flexBasis={16} />
            <NextLink path='/'>
              <LogoIcon width={100} height={40} />
            </NextLink>
            <Layout flexBasis={16} />
          </Column>
          <Layout flexBasis={28} flexShrink={0} />
        </Row>
        <Layout flexBasis={40} />
        <Row height='100vh'>
          <Layout flexBasis={16} flexShrink={0} />
          <Column fill>
            <NextNavLink path={ORDERS_ROUTE} {...hoverProps}>
              <Row alignItems='center'>
                <OrdersIcon width={24} height={24} />
                <Layout flexBasis={12} />
                <FormattedMessage id='sidebar.orders' />
                <Layout flexGrow={1} />
                <TransitionBox
                  transition={0.3}
                  backgroundColor={getColor(hover, router)}
                  p='4px 8px'
                  borderRadius='normal'
                >
                  54
                </TransitionBox>
              </Row>
            </NextNavLink>
            <Layout flexBasis={4} />
            <NextNavLink path={STOCK_ROUTE}>
              <Row alignItems='center'>
                <WarehouseIcon width={24} height={24} />
                <Layout flexBasis={12} />
                <FormattedMessage id='sidebar.stock' />
              </Row>
            </NextNavLink>
            <Layout flexBasis={4} />
            <NextNavLink path={FINANCE_ROUTE}>
              <Row alignItems='center'>
                <FinanceIcon width={24} height={24} />
                <Layout flexBasis={12} />
                <FormattedMessage id='sidebar.finance' />
              </Row>
            </NextNavLink>
            <Layout flexBasis={4} />
            <NextNavLink path={CONTACTS_ROUTE}>
              <Row alignItems='center'>
                <ClientsIcon width={24} height={24} />
                <Layout flexBasis={12} />
                <FormattedMessage id='sidebar.contacts' />
              </Row>
            </NextNavLink>
            <Layout flexBasis={16} />
            <Row>
              <Divider backgroundColor='grayscale6' />
            </Row>
            <Layout flexBasis={16} />
            <NextNavLink path={CONTACTS_ROUTE}>
              <Row alignItems='center'>
                <ReportsIcon width={24} height={24} />
                <Layout flexBasis={12} />
                <FormattedMessage id='sidebar.reports' />
              </Row>
            </NextNavLink>
            <Layout flexGrow={1} />
            <Row>
              <Layout width={40}>
                <Button variant='tertiary' size='sm' style={{ padding: '10px' }}>
                  <SettingsIcon width={20} height={20} />
                </Button>
              </Layout>
              <Layout flexBasis={12} />
              <Layout width={40}>
                <Button variant='tertiary' size='sm' style={{ padding: '10px' }}>
                  <HelpIcon width={20} height={20} />
                </Button>
              </Layout>
              <Layout flexBasis={12} />
              <Layout width={124}>
                <Button variant='tertiary' size='sm' style={{ justifyContent: 'flex-start' }}>
                  <LogOutIcon width={20} height={20} />
                  <Layout flexBasis={8} />
                  <FormattedMessage id='sidebar.exit' />
                </Button>
              </Layout>
            </Row>
            <Layout flexBasis={32} />
          </Column>
          <Layout flexBasis={16} flexShrink={0} />
        </Row>
      </Column>
    </Box>
  )
}

export { Sidebar }
