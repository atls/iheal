export interface MultiselectMenuItemProps {
  selectedItems: Array<any>
  removeSelectedItem: (item: string) => void
  addSelectedItem: (item: string) => void
  title?: string
  menuVariant?: 'primary' | 'secondary'
  value: string
}
