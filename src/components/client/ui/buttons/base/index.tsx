'use client'

import { forwardRef, useImperativeHandle, useRef } from 'react'
import { useButton } from 'react-aria'

import * as S from './styles'
import { ButtonProps } from './types'

/** This is the primary component of the UI library */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  const { variant = 'contained', color = 'primary', label } = props
  const innerRef = useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(props, innerRef)

  useImperativeHandle(ref, () => innerRef.current!)

  return (
    <S.Button {...buttonProps} ref={innerRef} variant={variant} color={color}>
      {label}
    </S.Button>
  )
})
