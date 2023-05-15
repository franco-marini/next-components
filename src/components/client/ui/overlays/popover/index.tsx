import { useRef } from 'react'
import { DismissButton, Overlay, usePopover } from 'react-aria'

import * as S from './styles'
import { PopoverProps } from './types'

export function Popover({ children, state, offset = 8, ...props }: PopoverProps) {
  let popoverRef = useRef(null)
  let { popoverProps, underlayProps, arrowProps, placement } = usePopover(
    {
      ...props,
      offset,
      popoverRef,
    },
    state,
  )

  return (
    <Overlay>
      <S.Underlay {...underlayProps} />
      <S.Popover {...popoverProps} ref={popoverRef}>
        <S.SVGArrow {...arrowProps} data-placement={placement}>
          <path d="M0 0,L6 6,L12 0" />
        </S.SVGArrow>
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </S.Popover>
    </Overlay>
  )
}
