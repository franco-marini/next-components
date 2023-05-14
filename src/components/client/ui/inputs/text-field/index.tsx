'use client'

import { ChangeEvent, useRef, useState } from 'react'
import { useTextField } from 'react-aria'

import { ErrorMessage, Subtext } from '../../texts'
import * as S from './styles'
import { TextFieldProps } from './types'

/** This is the primary component of the UI library */
export function TextField(props: TextFieldProps) {
  const { variant = 'standard', label, placeholder } = props
  const ref = useRef(null)
  const { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField(props, ref)
  const [isActive, setIsActive] = useState(false)

  console.log('inputProps', inputProps)
  console.log('labelProps', labelProps)
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    inputProps.onChange?.(e)
    setIsActive(e.target.value !== '')
  }

  return (
    <S.Container variant={variant}>
      <S.Input {...inputProps} ref={ref} variant={variant} onChange={handleOnChange} />
      <S.InputLabel {...labelProps} active={isActive} color="primary">
        {label || placeholder}
      </S.InputLabel>
      {props.description && <Subtext {...descriptionProps}>{props.description}</Subtext>}
      {props.errorMessage && (
        <ErrorMessage {...errorMessageProps}>{props.errorMessage}</ErrorMessage>
      )}
    </S.Container>
  )
}
