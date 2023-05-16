import { useRef } from 'react'
import { useListBox } from 'react-aria'
import { useListState } from 'react-stately'

import { ListBoxSection } from './list-box-section'
import { Option } from './option'
import * as S from './styles'
import { ListBoxProps } from './types'

export function ListBox<Data extends object>(props: ListBoxProps<Data>) {
  // Create state based on the incoming props
  let state = useListState<Data>(props)

  // Get props for the listbox element
  let ref = useRef(null)
  let { listBoxProps, labelProps } = useListBox(props, state, ref)

  return (
    <>
      <S.ListBoxLabel {...labelProps}>{props.label}</S.ListBoxLabel>
      <S.Ul {...listBoxProps} ref={ref}>
        {[...state.collection].map((item) =>
          item.type === 'section' ? (
            <ListBoxSection key={item.key} section={item} state={state} />
          ) : (
            <Option key={item.key} item={item} state={state} />
          ),
        )}
      </S.Ul>
    </>
  )
}
