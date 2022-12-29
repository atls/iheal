import styled                       from '@emotion/styled'

import React                        from 'react'
import { FC }                       from 'react'
import { useHover }                 from 'react-laag'

import { Badge }                    from '@ui/badge'
import { Checkbox }                 from '@ui/checkbox'
import { Condition }                from '@ui/condition'
import { ComponentIcon }            from '@ui/icons'
import { Layout }                   from '@ui/layout'
import { Box }                      from '@ui/layout'
import { Text }                     from '@ui/text'
import { getStatusColor }           from '@shared/utils'

import { MultiselectMenuItemProps } from './multiselect-menu-item.interface'
import { baseItemStyles }           from './multiselect-menu-item.styles'

const Container = styled.li(baseItemStyles)

const MultiselectMenuItem: FC<MultiselectMenuItemProps> = ({
  title,
  value,
  selectedItems,
  addSelectedItem,
  removeSelectedItem,
  menuVariant = 'secondary',
  ...props
}) => {
  const [hover, hoverProps] = useHover()

  return (
    <Container {...props} {...hoverProps}>
      <Box
        width='100%'
        backgroundColor={hover ? 'grayscaleBg' : 'white'}
        minHeight={44}
        alignItems='center'
        style={{
          transition: '.3s',
        }}
      >
        <Layout flexBasis={16} />
        <Condition match={menuVariant === 'primary'}>
          <Checkbox
            active={selectedItems.includes(value)}
            onCheck={(newState) => {
              if (newState === true) addSelectedItem(value)
              if (newState === false) removeSelectedItem(value)
            }}
            fill
          >
            <Text fontSize='tiny' color='text.primary'>
              {title}
            </Text>
          </Checkbox>
        </Condition>
        <Condition match={menuVariant === 'secondary'}>
          <Checkbox
            ghost
            active={selectedItems.includes(value)}
            onCheck={(newState) => {
              if (newState === true) addSelectedItem(value)
              if (newState === false) removeSelectedItem(value)
            }}
            fill
          >
            <Badge text={title} variant={getStatusColor(title)} />
          </Checkbox>
        </Condition>
        <Condition match={!selectedItems.includes(value) && menuVariant === 'secondary'}>
          <Box width={20} height={20} />
        </Condition>
        <Condition match={selectedItems.includes(value) && menuVariant === 'secondary'}>
          <Layout flexGrow={1} />
          <ComponentIcon color='black' width={20} height={20} />
        </Condition>
        <Layout flexBasis={16} />
      </Box>
    </Container>
  )
}

export { MultiselectMenuItem }
