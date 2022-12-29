import React                  from 'react'
import { FC }                 from 'react'
import { motion }             from 'framer-motion'

import { GhostButton }        from '@ui/button'
import { Condition }          from '@ui/condition'
import { Box }                from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Text }               from '@ui/text'

import { TabsProps }          from './tabs.interface'
import { UnderlineContainer } from './underline-container'

const Tabs: FC<TabsProps> = ({ tabs, selectedTab, setSelectedTab }) => (
  <Box width='100%'>
    {tabs.map(({ id, title }, index) => (
      <React.Fragment key={id}>
        <Box position='relative' flexDirection='column'>
          <motion.div whileTap={{ scale: 1.2 }}>
            <GhostButton
              style={{ justifyContent: 'flex-start' }}
              onClick={() => setSelectedTab(id)}
            >
              <Text
                p='8px 4px'
                color={id === selectedTab ? 'primaryMain' : 'black'}
                fontWeight='medium'
                fontSize='normal.semiReduced'
                lineHeight='medium'
              >
                {title}
              </Text>
            </GhostButton>
          </motion.div>
          {id === selectedTab ? (
            <motion.div layoutId='underline'>
              <UnderlineContainer />
            </motion.div>
          ) : null}
        </Box>
        <Condition match={index !== tabs.length - 1}>
          <Layout flexBasis={16} flexShrink={0} />
        </Condition>
      </React.Fragment>
    ))}
  </Box>
)

export { Tabs }
