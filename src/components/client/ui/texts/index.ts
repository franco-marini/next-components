import styled from 'styled-components'

import { StyledTextColor } from './types'

export const Label = styled.label<StyledTextColor>`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors[props.color ? props.color : 'font']};
`

export const Subtext = styled.span`
  font-size: 1.2rem;
  margin-top: 4px;
  color: ${(props) => props.theme.colors.subtext};
`

export const ErrorMessage = styled.span`
  font-size: 1.4rem;
  margin-top: 4px;
  color: ${(props) => props.theme.colors.error};
`
