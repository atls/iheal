import React                from 'react'
import { useFlexLayout }    from 'react-table'
import { useResizeColumns } from 'react-table'
import { useRowSelect }     from 'react-table'
import { useTable }         from 'react-table'

import { Checkbox }         from '@ui/checkbox'
import { Box }              from '@ui/layout'
import { TextEllipsis }     from '@ui/text'
import { Hover }            from '@ui/utils'

import { Resizer }          from '../styles'
import { TableBody }        from '../styles'
import { TableData }        from '../styles'
import { TableHead }        from '../styles'
import { TableHeader }      from '../styles'
import { TableLayout }      from '../styles'
import { TableRow }         from '../styles'

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

const IndeterminateCheckbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = React.useRef()
  const resolvedRef = ref || defaultRef

  React.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate
  }, [resolvedRef, indeterminate])

  return (
    <>
      <Checkbox size='small' active={rest.checked} ref={resolvedRef} {...rest} />
    </>
  )
})

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
    useResizeColumns,
    useFlexLayout,
    useRowSelect,
    (hooks) => {
      hooks.allColumns.push((columns) => [
        {
          id: 'selection',
          disableResizing: true,
          isFirst: true,
          minWidth: 40,
          width: 40,
          maxWidth: 40,
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Box>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </Box>
          ),
          Cell: ({ row }) => (
            <Box>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </Box>
          ),
        },
        ...columns,
      ])
      hooks.useInstanceBeforeDimensions.push(({ headerGroups }) => {
        const selectionGroupHeader = headerGroups[0].headers[0]
        selectionGroupHeader.canResize = false
      })
    }
  )

  return (
    <TableLayout {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup) => (
          <TableRow {...headerGroup.getHeaderGroupProps({})}>
            {headerGroup.headers.map((column) => (
              <Hover>
                {(hover, hoverProps) => (
                  <TableHeader
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
                    {column.canResize && <Resizer hover={hover} {...column.getResizerProps()} />}
                  </TableHeader>
                )}
              </Hover>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row) => {
          prepareRow(row)

          return (
            <TableRow {...row.getRowProps()}>
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
          )
        })}
      </TableBody>
    </TableLayout>
  )
}

export { Table }
