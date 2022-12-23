import styled from '@emotion/styled'

export const Styles = styled.div`
  display: block;
  overflow: auto;
  width: 100%;
  
  table {
    overflow: scroll;
    max-width: 100%;
    width: 100%;
    border-spacing: 0;
    border: none;
    padding: 0;
  }
  
  table td {
    padding: 0;
  }
  
  table td span {
    white-space: nowrap;
  text-overflow: ellipsis;
  }
`

export const Resizer = styled('div')`
  right: 0;
  background: ${({ theme, hover }: any) => (hover ? theme.colors.grayscale4 : 'transparent')};
  width: 1px;
  height: 100%;
  transition: 0.2s;
  position: absolute;
  top: 0;
  touch-action: none;
`

export const TableLayout = styled('table')`
  border-spacing: 0;
  border: none;
  overflow: auto;
`

export const TableHead = styled('thead')``

export const TableRow = styled('tr')`
  border-bottom: ${({ theme }: any) => theme.borders.grayscale7};
  border-top: none;
`

export const TableHeader = styled('th')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 16px 11px 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  background-color: ${({ isResizing, theme }: any) =>
    isResizing ? theme.colors.grayscale7 : 'white'};
  border-radius: ${({ theme }: any) => theme.radii.topLeft12};
  height: 40px;
  overflow-y: auto;
`

export const TableBody = styled('tbody')`
  overflow-y: scroll;
  overflow-x: auto;
`

export const TableData = styled('td')`
  padding: 16px 16px 16px 24px !important;
  height: 64px;
  position: relative;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-top: none;
  overflow-x: hidden;
`
