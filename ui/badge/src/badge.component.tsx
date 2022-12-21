import React          from 'react'
import { FC }         from 'react'

import { Condition }  from '@ui/condition'
import { XCloseIcon } from '@ui/icons'
import { Box }        from '@ui/layout'
import { Text }       from '@ui/text'

import { BadgeProps } from './badge.interface'
import { getVariant } from './helpers'

const Badge: FC<BadgeProps> = ({
  icon,
  remove,
  isRemove = false,
  position,
  text,
  variant = 'grayscale',
}) => (
  <Box
    backgroundColor={getVariant(variant).background}
    p='4px 8px'
    borderRadius='normal'
    alignItems='center'
  >
    <Condition match={position === 'left'}>
      <Box mr='4px'>{icon}</Box>
    </Condition>
    <Text
      color={getVariant(variant).color}
      fontSize='small.semiIncreased'
      fontWeight='medium'
      lineHeight='medium'
    >
      {text}
    </Text>
    <Condition match={position === 'right'}>
      <Box ml='4px'>{icon}</Box>
    </Condition>
    <Condition match={isRemove}>
      <Box
        ml='4px'
        onClick={(e) => {
          e.stopPropagation()
          remove()
        }}
      >
        <XCloseIcon color={getVariant(variant).color} width={16} height={16} />
      </Box>
    </Condition>
  </Box>
)

export { Badge }
