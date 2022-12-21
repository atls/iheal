import styled                              from '@emotion/styled'

import { baseMenuMultiselectStyles }       from './menu-multiselect.styles'
import { shapeMenuMultiselectStyles }      from './menu-multiselect.styles'
import { appearanceMenuMultiselectStyles } from './menu-multiselect.styles'

const MenuMultiselect = styled.div(
  baseMenuMultiselectStyles,
  shapeMenuMultiselectStyles,
  appearanceMenuMultiselectStyles
)

export { MenuMultiselect }
