import { useSelect }                       from '@atls-ui-parts/select'

import React                               from 'react'
import { FC }                              from 'react'
import { useMultipleSelection }            from 'downshift'
import { useSelect as useDownshiftSelect } from 'downshift'
import { motion }                          from 'framer-motion'
import { useRef }                          from 'react'
import { useState }                        from 'react'
import { useEffect }                       from 'react'

import { Badge }                           from '@ui/badge'
import { Condition }                       from '@ui/condition'
import { ChevronDownIcon }                 from '@ui/icons'
import { FillXCloseIcon }                  from '@ui/icons'
import { Box }                             from '@ui/layout'
import { Column }                          from '@ui/layout'
import { Layout }                          from '@ui/layout'
import { Text }                            from '@ui/text'
import { getStatusColor }                  from '@shared/utils'

import { ArrowContainer }                  from './arrow-container'
import { Button }                          from './button'
import { Label }                           from './label'
import { Menu }                            from './menu'
import { MenuItem }                        from './menu-item'
import { MenuMultiselect }                 from './menu-multiselect'
import { MultiselectMenuItem }             from './multiselect-menu-item'
import { SelectProps }                     from './select.interface'

const Select: FC<SelectProps> = ({
  items,
  label = '',
  value,
  onChange,
  onSelect,
  colors,
  required = false,
  placeholder,
  multiselect = false,
  icon,
  menuVariant = 'primary',
  attachment,
  selectedDefault,
  menuWidth,
  initialItem,
  placement,
  arrowPosition = 'right',
  resetter,
  ...props
}) => {
  const { reset, addSelectedItem, removeSelectedItem, selectedItems, getSelectedItemProps } =
    useMultipleSelection({
      initialSelectedItems: selectedDefault !== undefined ? [items[selectedDefault]] : [],
      onStateChange({ selectedItems: newSelectedItems, type }) {
        switch (type) {
          case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownBackspace:
          case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete:
          case useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace:
          case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
            onSelect(newSelectedItems)
            break
          default:
            break
        }
      },
    })

  const { isOpen, buttonProps, menuProps, getMenuItemProps, renderMenu, selectedItem }: any =
    useSelect({
      // @ts-ignore
      items,
      onChange,
      stateReducer: (state, actionAndChanges) => {
        const { changes, type } = actionAndChanges
        if (multiselect && type === useDownshiftSelect.stateChangeTypes.ItemClick) {
          return {
            ...changes,
            isOpen: true,
          }
        }

        return changes
      },
      onStateChange: ({ type, selectedItem: selected }) => {
        if (multiselect && type === useDownshiftSelect.stateChangeTypes.ItemClick) {
          if (selected) {
            addSelectedItem(selected)
          }
        }
      },
      initialSelectedItem: initialItem,
      placement,
    })

  if (onSelect) {
    onSelect(selectedItems)
  }

  if (colors) {
    props.color = colors // eslint-disable-line no-param-reassign
  }

  useEffect(() => {
    if (resetter) {
      reset()
    }
  }, [resetter, reset])

  const ref = useRef<HTMLDivElement | null>(null)

  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    setWidth(ref!.current!.clientWidth - 100)
  })

  return (
    <Column fill ref={ref}>
      <Button
        isSelected={!!selectedItem}
        selectedItems={Boolean(selectedItems.length)}
        isOpen={isOpen}
        value={value}
        {...buttonProps}
        {...props}
      >
        <Condition match={arrowPosition === 'left'}>
          <ArrowContainer
            isOpen={isOpen}
            selectedItems={!!selectedItems.length}
            arrowPosition={arrowPosition}
          >
            <ChevronDownIcon color='grayscale4' width={20} height={20} />
          </ArrowContainer>
        </Condition>
        <Condition match={!value.length && colors !== 'secondary'}>
          <Text color='grayscale4'>{placeholder}</Text>
        </Condition>
        <Condition match={colors === 'secondary'}>{placeholder}</Condition>
        <Condition match={!multiselect}>
          <Column fill justifyContent='center'>
            <Condition match={value.length && Boolean(label.length)}>
              <Layout flexBasis={6} />
              <Label required={required}>{label}</Label>
              <Layout flexBasis={2} />
            </Condition>
            <Condition match={colors !== 'secondary'}>
              <Text color='black' fontWeight='medium' lineHeight='medium'>
                {value}
              </Text>
            </Condition>
            <Condition match={Boolean(label.length)}>
              <Layout flexBasis={6} />
            </Condition>
          </Column>
        </Condition>
        <Condition match={Boolean(icon)}>{icon}</Condition>
        <Condition match={!icon}>
          <Layout maxWidth={width} overflow='scroll'>
            {selectedItems.map((selectedItemForRender, index) => (
              <Layout
                mr='4px'
                {...getSelectedItemProps({
                  selectedItem: selectedItemForRender,
                  index,
                })}
              >
                <Badge
                  text={selectedItemForRender}
                  isRemove
                  variant={getStatusColor(selectedItemForRender)}
                  remove={() => removeSelectedItem(selectedItemForRender)}
                />
              </Layout>
            ))}
          </Layout>
        </Condition>
        <Condition match={arrowPosition === 'right' && !icon}>
          <Layout flexGrow={1} flexShrink={0} />
          <Condition match={Boolean(selectedItems.length)}>
            <Box
              onClick={(e) => {
                e.stopPropagation()
                reset()
              }}
            >
              <FillXCloseIcon color='grayscale4' width={16} height={16} />
            </Box>
            <Layout flexBasis={8} flexShrink={0} />
          </Condition>
          <ArrowContainer isOpen={isOpen} selectedItems={!!selectedItems.length}>
            <ChevronDownIcon color='grayscale4' width={20} height={20} />
          </ArrowContainer>
        </Condition>
      </Button>
      {renderMenu(
        <>
          <Condition match={!multiselect}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            >
              <Menu {...menuProps} placement={placement} menuWidth={menuWidth}>
                {items.map((item, index) => (
                  <MenuItem
                    {...getMenuItemProps(item, index)}
                    highlighted={selectedItem === item}
                    checked={item === value}
                    item={item}
                    value={value}
                  >
                    {item}
                  </MenuItem>
                ))}
              </Menu>
            </motion.div>
          </Condition>
          <Condition match={!!multiselect}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            >
              <MenuMultiselect {...menuProps} menuWidth={menuWidth}>
                {items.map((item) => (
                  <MultiselectMenuItem
                    selectedItems={selectedItems}
                    addSelectedItem={addSelectedItem}
                    removeSelectedItem={removeSelectedItem}
                    title={item}
                    value={item}
                    menuVariant={menuVariant}
                  />
                ))}
              </MenuMultiselect>
            </motion.div>
          </Condition>
        </>
      )}
    </Column>
  )
}

export { Select }
