import styled          from '@emotion/styled'

import React           from 'react'
import { FC }          from 'react'
import { useCallback } from 'react'
import { useEffect }   from 'react'
import { useRef }      from 'react'
import { useState }    from 'react'

const TableWrapper = styled('div')({
  overflow: 'hidden',
  width: '100%',
})

const TableStyles = styled('table')(({ headersLength }: any) => ({
  maxWidth: 'calc(100vw - 260px)',
  display: 'grid',
  overflow: 'auto',
  gridTemplateColumns: [...Array(headersLength)].map(() => 'minmax(150px, 2fr)').join(' '),
}))

const createHeaders = (headers) => {
  return headers.map((item) => ({
    text: item,
    ref: useRef(),
  }))
}

const Table: FC = ({ headers, minCellWidth, tableContent }) => {
  const [tableHeight, setTableHeight] = useState('auto')
  const [activeIndex, setActiveIndex] = useState(null)
  const tableElement = useRef(null)
  const columns = createHeaders(headers)

  useEffect(() => {
    setTableHeight(tableElement!.current?.offsetHeight)
  }, [])

  const mouseDown = (index) => {
    setActiveIndex(index)
  }

  const mouseMove = useCallback(
    (e) => {
      const gridColumns = columns.map((col, i) => {
        if (i === activeIndex) {
          const width = e.clientX - col.ref.current.offsetLeft

          if (width >= minCellWidth && width <= 350) {
            return `${width}px`
          }
        }
        return `${col.ref.current.offsetWidth}px`
      })

      tableElement.current.style.gridTemplateColumns = `${gridColumns.join(' ')}`
    },
    [activeIndex, columns, minCellWidth]
  )

  const removeListeners = useCallback(() => {
    window.removeEventListener('mousemove', mouseMove)
    window.removeEventListener('mouseup', removeListeners)
  }, [mouseMove])

  const mouseUp = useCallback(() => {
    setActiveIndex(null)
    removeListeners()
  }, [setActiveIndex, removeListeners])

  useEffect(() => {
    if (activeIndex !== null) {
      window.addEventListener('mousemove', mouseMove)
      window.addEventListener('mouseup', mouseUp)
    }

    return () => {
      removeListeners()
    }
  }, [activeIndex, mouseMove, mouseUp, removeListeners])

  return (
    <>
      <TableWrapper>
        <TableStyles headersLength={headers.length} className='resizeable-table' ref={tableElement}>
          <thead>
            <tr>
              {columns.map(({ ref, text }, i) => (
                <th ref={ref} key={text}>
                  <span>{text}</span>
                  <div
                    style={{ height: tableHeight }}
                    onMouseDown={() => mouseDown(i)}
                    className={`resize-handle ${activeIndex === i ? 'active' : 'idle'}`}
                  />
                </th>
              ))}
            </tr>
          </thead>
        </TableStyles>
      </TableWrapper>
    </>
  )
}

const OrdersTable = () => {
  const tableHeaders = [
    'Заказ №',
    'Фото',
    'Статус',
    'Создал',
    'Срок',
    'Клиент',
    'Техника',
    'Группа',
    'Адрес клиента',
    'Исполнитель',
    'Сумма',
  ]

  return <Table headers={tableHeaders} minCellWidth={120} />
}

export { OrdersTable }
