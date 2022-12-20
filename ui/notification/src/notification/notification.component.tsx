import React                 from 'react'
import { AnimatePresence }   from 'framer-motion'
import { FC }                from 'react'
import { motion }            from 'framer-motion'
import { useCallback }       from 'react'
import { useEffect }         from 'react'
import { useState }          from 'react'

import { GhostButton }       from '@ui/button'
import { Box }               from '@ui/layout'
import { Row }               from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Text }              from '@ui/text'

import { NotificationProps } from '../notification.interface'
import { Icon }              from './icon'
import { getVariant }        from './helpers'

const Notification: FC<NotificationProps> = ({ notificationId, message, type, dispatch }) => {
  const [close, setClose] = useState<boolean>(false)
  const [progress, setProgress] = useState<number>(0)
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)

  const handleStartTimer = () => {
    const id = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 0.5

        clearInterval(id)
        return prev
      })
    }, 20)

    setIntervalId(id)
  }

  const handlePauseTimer = useCallback(() => {
    clearInterval(intervalId!)
  }, [intervalId])

  const handleCloseNotification = useCallback(() => {
    handlePauseTimer()
    setClose(true)

    setTimeout(() => {
      dispatch({
        type: 'REMOVE_NOTIFICATION',
        id: notificationId,
      })
    }, 200)
  }, [notificationId, dispatch, handlePauseTimer])

  useEffect(() => {
    if (progress === 100) return handleCloseNotification()

    return () => undefined
  }, [progress, handleCloseNotification])

  useEffect(() => {
    handleStartTimer()
  }, [])

  return (
    <AnimatePresence>
      {!close && (
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: -16, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          style={{ marginBottom: 16 }}
          onMouseEnter={handlePauseTimer}
          onMouseLeave={handleStartTimer}
        >
          <Box
            minWidth={300}
            height={56}
            backgroundColor='white'
            boxShadow='medium'
            borderRadius='extra'
          >
            <Box
              backgroundColor={getVariant(type).background}
              p='16px 18px'
              borderRadius='leftSide4'
              border={getVariant(type).color}
              alignItems='center'
              justifyContent='center'
            >
              <Icon type={type} />
            </Box>
            <Box width='100%' border='gray20' borderRadius='rightSide4' alignItems='center'>
              <Layout flexBasis={16} flexShrink={0} />
              <Row alignItems='center'>
                <Layout>
                  <Text fontSize='normal.semiReduced' lineHeight='medium' color='gray70'>
                    {message}
                  </Text>
                </Layout>
              </Row>
              <Layout flexBasis={16} flexShrink={0} />
            </Box>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export { Notification }
