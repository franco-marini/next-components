import { ListState, Node } from 'react-stately'

export interface StyledLiProps {
  isSelected: boolean
  isDisabled: boolean
  isFocusVisible: boolean
}

export interface OptionProps<T extends object> {
  item: Node<T>
  state: ListState<T>
}
