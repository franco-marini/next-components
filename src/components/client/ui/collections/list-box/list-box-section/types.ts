import { ListState, Node } from 'react-stately'

export interface ListBoxSectionProps<T extends object> {
  section: Node<T>
  state: ListState<T>
}
