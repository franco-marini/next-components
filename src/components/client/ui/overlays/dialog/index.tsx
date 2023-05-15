import { useRef } from 'react'
import { useDialog } from 'react-aria'

import * as S from './styles'
import { DialogProps } from './types'

export function Dialog({ title, children, ...props }: DialogProps) {
  let ref = useRef<HTMLDivElement>(null)
  let { dialogProps, titleProps } = useDialog(props, ref)

  return (
    <S.Container {...dialogProps} ref={ref}>
      {title && <S.Heading3 {...titleProps}>{title}</S.Heading3>}
      {children}
    </S.Container>
  )
}
