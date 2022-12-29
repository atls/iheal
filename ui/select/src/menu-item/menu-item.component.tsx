import styled             from '@emotion/styled'

import React              from 'react'
import { FC }             from 'react'
import { useHover }       from 'react-laag'

import { Condition }      from '@ui/condition'
import { ComponentIcon }  from '@ui/icons'
import { Layout }         from '@ui/layout'
import { Column }         from '@ui/layout'
import { Box }            from '@ui/layout'
import { Text }           from '@ui/text'

import { MenuItemProps }  from './menu-item.interface'
import { baseItemStyles } from './menu-item.styles'

const Container = styled.li(baseItemStyles)

const MenuItem: FC<MenuItemProps> = ({ highlighted, children, ...props }) => {
  const [hover, hoverProps] = useHover()

  return (
    <Container {...props} {...hoverProps}>
      <Column width='100%'>
        <Layout width='100%' height={44}>
          <Box
            width='100%'
            height={44}
            alignItems='center'
            backgroundColor={hover ? 'grayscaleBg' : 'white'}
            style={{
              transition: '.3s',
            }}
          >
            <Layout flexBasis={16} />
            <Layout>
              <Text fontSize='normal.semiReduced' lineHeight='medium' color='black'>
                {children}
              </Text>
            </Layout>
            <Layout flexGrow={1} />
            <Condition match={highlighted}>
              <ComponentIcon color='black' width={20} height={20} />
            </Condition>
            <Layout flexBasis={16} />
          </Box>
        </Layout>
      </Column>
    </Container>
  )
}
export { MenuItem }
