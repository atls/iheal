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

  useEffect(() => {
    if (resetter) {
      reset()
    }
  }, [resetter, reset])

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

  const ref = useRef()
  console.log(ref)

  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    const calc = ref!.current!.offsetWidth - 60
    setWidth(calc)
  }, [])

  return (
    <Column fill ref={ref}>
      <Condition match={Boolean(label.length)}>
        <Label required={required}>{label}</Label>
        <Layout flexBasis={8} />
      </Condition>
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
        <Condition match={!value.length}>
          <Text color='grayscale4'>{placeholder}</Text>
        </Condition>
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
        <Condition match={arrowPosition === 'right'}>
          <Layout flexGrow={1} flexShrink={0} />
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
              <Menu {...menuProps} menuWidth={menuWidth}>
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
