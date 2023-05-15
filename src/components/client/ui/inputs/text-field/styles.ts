import styled, { css } from 'styled-components'

import { Label } from '../../texts'
import { StyledTextFieldProps } from './types'

export const variants = {
  standard: {
    container: css<StyledTextFieldProps>``,
    input: css<StyledTextFieldProps>``,
  },
}

export const Container = styled.div<StyledTextFieldProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  ${(props) => variants[props.variant].container};
`

export const Input = styled.input<StyledTextFieldProps>`
  background-color: transparent;
  padding: 8px 0px;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme.colors.subtext};
  outline: none;
  color: ${(props) => props.theme.colors.font};

  &::placeholder {
    color: transparent;
  }

  &:focus {
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }

  ${(props) => variants[props.variant].input}
`

export const InputLabel = styled(Label)<{ active: boolean }>`
  position: absolute;
  left: 0;
  align-items: center;
  cursor: text;
  transition: 0.3s ease-in-out;
  top: ${(props) => (props.active ? '-10px' : '0')};
  padding: ${(props) => (props.active ? '0' : '8px 0px')};
  font-size: ${(props) => (props.active ? '1.2rem' : '1.6rem')};

  ${Input}:focus ~ & {
    top: -10px;
    padding: 0;
    font-size: 1.2rem;
  }
`
