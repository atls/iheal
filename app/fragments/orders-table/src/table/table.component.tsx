import React                     from 'react'
import { FormattedMessage }      from 'react-intl'
import { useEffect }             from 'react'
import { useState }              from 'react'
import { useFlexLayout }         from 'react-table'
import { useSortBy }             from 'react-table'
import { useResizeColumns }      from 'react-table'
import { useRowSelect }          from 'react-table'
import { useTable }              from 'react-table'

import { Checkbox }              from '@ui/checkbox'
import { Condition }             from '@ui/condition'
import { BadSmileIcon }          from '@ui/icons'
import { GoodSmileIcon }         from '@ui/icons'
import { GreatSmileIcon }        from '@ui/icons'
import { ImageBlock }            from '@ui/image'
import { Box }                   from '@ui/layout'
import { Column }                from '@ui/layout'
import { Layout }                from '@ui/layout'
import { Ruble }                 from '@ui/text'
import { Space }                 from '@ui/text'
import { TextEllipsis }          from '@ui/text'
import { Hover }                 from '@ui/utils'
import { resetOrderIdsAction }   from '@app/store'
import { selectAllOrdersAction } from '@app/store'
import { selectOrderAction }     from '@app/store'
import { unselectOrderAction }   from '@app/store'
import { useSelectedOrderIds }   from '@app/store'
import { formattedDate }         from '@shared/utils'
import { usePopover }            from '@ui/utils'

import { Resizer }               from '../styles'
import { TableBody }             from '../styles'
import { TableData }             from '../styles'
import { TableHead }             from '../styles'
import { TableHeader }           from '../styles'
import { TableLayout }           from '../styles'
import { TableRow }              from '../styles'

const headerProps = (props, { column }) => getStyles(props, column.align, column.isFirst)

const cellProps = (props, { cell }) => getStyles(props, cell.column.align, cell.column.isFirst)

const getStyles = (props, align = 'left', isFirst = false) => [
  props,
  {
    style: {
      padding: isFirst ? '16px 0px 16px 24px !important' : '11px 16px 11px 24px',
      justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
      alignItems: 'center',
      display: 'flex',
    },
  },
]

const Table = ({ columns, data }) => {
  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 40,
    }),
    []
  )

  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useSortBy,
    useResizeColumns,
    useFlexLayout,
    useRowSelect,
    (hooks) => {
      hooks.allColumns.push((columns, meta) => [
        {
          id: 'selection',
          disableResizing: true,
          isFirst: true,
          minWidth: 40,
          width: 40,
          maxWidth: 40,
          Header: () => {
            const [activeAllApplications, setActiveAllApplications] = useState<boolean>(false)
            const [disableAllApplications, setDisableAllApplications] = useState<boolean>(true)

            const ids = useSelectedOrderIds()

            useEffect(() => {
              if (activeAllApplications) selectAllOrdersAction(meta.instance.data)
              if (!activeAllApplications) resetOrderIdsAction()
            }, [activeAllApplications]) // eslint-disable-line

            useEffect(() => {
              if (!ids.length) setActiveAllApplications(false)
            }, [ids.length])

            useEffect(() => {
              if (!disableAllApplications) {
                setDisableAllApplications(true)
                setActiveAllApplications(false)
                resetOrderIdsAction()
              }
            }, [disableAllApplications])

            return (
              <Box>
                <Condition match={!ids.length}>
                  <Checkbox
                    icon='minus'
                    size='small'
                    active={activeAllApplications}
                    onCheck={setActiveAllApplications}
                  />
                </Condition>
                <Condition match={Boolean(ids.length)}>
                  <Checkbox
                    icon='minus'
                    size='small'
                    active={disableAllApplications}
                    onCheck={setDisableAllApplications}
                  />
                </Condition>
              </Box>
            )
          },
          Cell: ({ row }) => {
            const selectedIds = useSelectedOrderIds()

            const selectApplication = () => {
              if (selectedIds.includes(row.original.id)) {
                unselectOrderAction(selectedIds, row.original.id)
              } else if (!selectedIds.includes(row.original.id)) {
                selectOrderAction(selectedIds, row.original.id)
              }
            }

            return (
              <Box>
                <Checkbox
                  size='small'
                  active={selectedIds.includes(row.original.id)}
                  onCheck={selectApplication}
                />
              </Box>
            )
          },
        },
        {
          id: 'orderLink',
          Header: 'Заказ #',
          width: 80,
          Cell: ({ row }) => (
            <Box>
              <TextEllipsis color='link' fontSize='small.semiLarge' fontWeight='medium'>
                {row.original.orderLink}
              </TextEllipsis>
            </Box>
          ),
        },
        {
          id: 'photo',
          Header: 'Фото',
          maxWidth: 80,
          Cell: ({ row }) => (
            <Box borderRadius='normal' overflow='hidden' width={40} height={40}>
              <ImageBlock width={40} height={40} src={row.original.photo} />
            </Box>
          ),
        },
        {
          id: 'status',
          Header: 'Статус',
          width: 140,
          Cell: ({ row }) => <Box>{row.original.status}</Box>,
        },
        {
          id: 'creator',
          Header: 'Создал',
          width: 200,
          Cell: ({ row }) => (
            <Column>
              <TextEllipsis color='black' lineHeight='small'>
                {row.original.creator.firstName}
                <Space />
                {row.original.creator.lastName}
              </TextEllipsis>
              <Layout flexBasis={2} />
              <TextEllipsis color='grayscale4' lineHeight='small'>
                {formattedDate('date', row.original.creator.createdAt)}
              </TextEllipsis>
            </Column>
          ),
        },
        {
          id: 'deadline',
          Header: 'Срок',
          width: 120,
          Cell: ({ row }) => (
            <Box>
              <TextEllipsis color='black' lineHeight='small'>
                {formattedDate('daysLeft', row.original.deadline)}
                <Space />
                <FormattedMessage id='order_table.days' />
              </TextEllipsis>
            </Box>
          ),
        },
        {
          id: 'client',
          Header: 'Клиент',
          width: 260,
          maxWidth: 260,
          Cell: ({ row }) => {
            const { layerProps, triggerProps, render, isOpen } = usePopover(
              'bottom-center',
              -40,
              'click'
            )

            return (
              <Column {...triggerProps}>
                <Box>
                  <TextEllipsis lineHeight='small'>
                    {row.original.client.firstName}
                    <Space />
                    {row.original.client.lastName}
                  </TextEllipsis>
                  <Layout flexBasis={8} flexShrink={0} />
                  <Box minWidth={16} minHeight={16}>
                    <Condition match={row.original.client.review === 'GREAT'}>
                      <GreatSmileIcon width={16} height={16} />
                    </Condition>
                    <Condition match={row.original.client.review === 'GOOD'}>
                      <GoodSmileIcon width={16} height={16} />
                    </Condition>
                    <Condition match={row.original.client.review === 'BAD'}>
                      <BadSmileIcon width={16} height={16} />
                    </Condition>
                  </Box>
                </Box>
                <Layout flexBasis={2} />
                <Box>
                  <TextEllipsis
                    color='grayscale4'
                    fontSize='small.semiIncreased'
                    lineHeight='medium'
                  >
                    {row.original.client.phone}
                  </TextEllipsis>
                </Box>
                {render(
                  <Box
                    minWidth={188}
                    minHeight={200}
                    onClick={(e) => e.stopPropagation()}
                    p='4px'
                    backgroundColor='white'
                    border='grayscale7W05'
                    borderRadius='intermediate'
                    boxShadow='shSmall'
                    {...layerProps}
                  >
                    <Column fill>
                      <Layout>
                        <TextEllipsis lineHeight='small' color='link' fontWeight='medium'>
                          {row.original.client.firstName}
                          <Space />
                          {row.original.client.lastName}
                        </TextEllipsis>
                      </Layout>
                      <Layout flexBasis={2} />
                    </Column>
                  </Box>
                )}
              </Column>
            )
          },
        },
        {
          id: 'technique',
          Header: 'Техника',
          width: 200,
          Cell: ({ row }) => (
            <Box>
              <TextEllipsis lineHeight='small'>{row.original.technique}</TextEllipsis>
            </Box>
          ),
        },
        {
          id: 'group',
          Header: 'Группа',
          width: 200,
          Cell: ({ row }) => (
            <Box>
              <TextEllipsis lineHeight='small'>{row.original.group}</TextEllipsis>
            </Box>
          ),
        },
        {
          id: 'clientAddress',
          Header: 'Адрес клиента',
          width: 200,
          Cell: ({ row }) => (
            <Box>
              <TextEllipsis lineHeight='small'>{row.original.clientAddress}</TextEllipsis>
            </Box>
          ),
        },
        {
          id: 'amount',
          Header: 'Сумма',
          width: 200,
          Cell: ({ row }) => (
            <Box>
              <TextEllipsis lineHeight='small'>
                {row.original.amount}
                <Space />
                <Ruble />
              </TextEllipsis>
            </Box>
          ),
        },
      ])
      hooks.useInstanceBeforeDimensions.push(({ headerGroups }) => {
        const selectionGroupHeader = headerGroups[0].headers[0]
        selectionGroupHeader.canResize = false
      })
    }
  )
  const selectedIds = useSelectedOrderIds()

  return (
    <TableLayout {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup) => (
          <TableRow {...headerGroup.getHeaderGroupProps({})}>
            {headerGroup.headers.map((column) => {
              return (
                <Hover>
                  {(hover, hoverProps) => (
                    <TableHeader
                      isFirst={column.isFirst}
                      align={column.align}
                      isResizing={column.isResizing}
                      {...hoverProps}
                      {...column.getHeaderProps(headerProps)}
                    >
                      <TextEllipsis
                        color='grayscale4'
                        fontSize='small.semiIncreased'
                        lineHeight='medium'
                      >
                        {column.render('Header')}
                      </TextEllipsis>
                      {column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : ''}
                      {column.canResize && <Resizer hover={hover} {...column.getResizerProps()} />}
                    </TableHeader>
                  )}
                </Hover>
              )
            })}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row) => {
          prepareRow(row)

          return (
            <Hover>
              {(hover, hoverProps) => (
                <TableRow
                  hover={hover}
                  isSelected={selectedIds.includes(row.original.id)}
                  {...hoverProps}
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell) => {
                    return (
                      <TableData {...cell.getCellProps(cellProps)}>
                        <TextEllipsis fontSize='small.semiLarge' lineHeight='small'>
                          {cell.render('Cell')}
                        </TextEllipsis>
                      </TableData>
                    )
                  })}
                </TableRow>
              )}
            </Hover>
          )
        })}
      </TableBody>
    </TableLayout>
  )
}

export { Table }
