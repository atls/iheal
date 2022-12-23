import React               from 'react'
import { forwardRef }      from 'react'

import { Condition }       from '@ui/condition'
import { ComponentIcon }   from '@ui/icons'
import { MinusIcon }       from '@ui/icons'
import { doNothing }       from '@shared/utils'
import { useHover }        from '@ui/utils'

import { CheckboxProps }   from './checkbox.interface'
import { Container }       from './checkbox.styles'
import { Box }             from './checkbox.styles'
import { SelectCheckmark } from './checkbox.styles'
import { Label }           from './checkbox.styles'

const CheckboxWithoutRef = (
  {
    children,
    icon = 'check',
    active,
    disabled,
    size = 'normal',
    ghost = false,
    onCheck = (newState) => doNothing(),
    ...props
  }: CheckboxProps,
  ref
) => {
  const [hover, hoverProps] = useHover()

  return (
    <Container
      onClick={() => (disabled ? doNothing() : onCheck(!active))}
      {...props}
      {...hoverProps}
      ref={ref}
    >
      <Condition match={!ghost}>
        <Box size={size} checked={active!} hover={hover!} disabled={disabled!}>
          <SelectCheckmark checked={active!}>
            <Condition match={icon === 'check'}>
              <ComponentIcon color='white' width={14} height={14} />
            </Condition>
            <Condition match={icon === 'minus'}>
              <MinusIcon color='white' width={14} height={14} />
            </Condition>
          </SelectCheckmark>
        </Box>
      </Condition>
      <Label ghost={ghost!}>{children}</Label>
    </Container>
  )
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(CheckboxWithoutRef)

export { Checkbox }
