'use client'

import { useRef } from 'react'
import { useTextField } from 'react-aria'

import { ErrorMessage, Subtext } from '../../texts'
import * as S from './styles'
import { TextFieldProps } from './types'

/** This is the primary component of the UI library */
export function TextField(props: TextFieldProps) {
  const { variant = 'standard', label, placeholder } = props
  const ref = useRef<HTMLInputElement>(null)
  const { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField(props, ref)

  return (
    <S.Container variant={variant}>
      <S.Input {...inputProps} ref={ref} variant={variant} />
      <S.InputLabel {...labelProps} active={ref.current?.value !== ''} color="primary">
        {label || placeholder}
      </S.InputLabel>
      {props.description && <Subtext {...descriptionProps}>{props.description}</Subtext>}
      {props.errorMessage && (
        <ErrorMessage {...errorMessageProps}>{props.errorMessage}</ErrorMessage>
      )}
    </S.Container>
  )
}
