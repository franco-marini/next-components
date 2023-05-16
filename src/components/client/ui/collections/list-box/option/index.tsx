import { useRef } from 'react'
import { mergeProps, useFocusRing, useOption } from 'react-aria'

import * as S from './styles'
import { OptionProps } from './types'

export function Option<Data extends object>({ item, state }: OptionProps<Data>) {
  // Get props for the option element
  const ref = useRef(null)
  const { optionProps, isSelected, isDisabled } = useOption<Data>(
    {
      key: item.key,
    },
    state,
    ref,
  )

  // Determine whether we should show a keyboard
  // focus ring for accessibility
  const { isFocusVisible, focusProps } = useFocusRing()

  return (
    <S.Li
      {...mergeProps(optionProps, focusProps)}
      ref={ref}
      isFocusVisible={isFocusVisible}
      isSelected={isSelected}
      isDisabled={isDisabled}
    >
      {item.rendered}
    </S.Li>
  )
}
