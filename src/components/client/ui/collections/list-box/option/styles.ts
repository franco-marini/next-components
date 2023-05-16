import styled from 'styled-components'

import { optionPadding } from '../styles'
import { StyledLiProps } from './types'

export const Li = styled.li<StyledLiProps>`
  font-size: 1.4rem;
  background: ${(props) =>
    props.isDisabled
      ? props.theme.colors.disabled + '40'
      : props.isSelected
      ? props.theme.colors.primary
      : 'transparent'};
  color: ${(props) =>
    props.isDisabled
      ? props.theme.colors.disabled
      : props.isSelected
      ? props.theme.colors.white
      : props.theme.colors.font};
  ${optionPadding}
  outline: none;

  &:hover {
    background-color: ${(props) =>
      props.isSelected ? undefined : props.theme.colors.primary + '40'};
  }

  &:focus {
    background-color: ${(props) =>
      props.isSelected ? undefined : props.theme.colors.primary + 'BF'};
  }
`
