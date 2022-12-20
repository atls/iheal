import { injectGlobal } from '@emotion/css'

import { theme }        from '@ui/theme'

injectGlobal(`
table thead,
table tbody,
table tr {
    display: contents;
}

table th {
    position: relative;
    font-size: 18px;
}

table th,
table td {
    text-align: left;
    padding: 16px 20px;
    min-width: 100px;
}

table th span,
table td span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
}

table tr td {
    border-top: 1px solid #ccc;
}

.resize-handle {
    display: block;
    position: absolute;
    cursor: col-resize;
    width: 1px;
    max-height: 55px;
    right: 0;
    top: 0;
    z-index: 1;
    border-right: ${theme.borders.transparent};
}

.resize-handle:hover {
  border-color: ${theme.colors.grayscale4};
}

.resize-handle.active {
  border-color: ${theme.colors.grayscale4};
}
`)
