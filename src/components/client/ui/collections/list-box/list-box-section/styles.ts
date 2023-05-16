import styled from 'styled-components'

import { optionPadding } from '../styles'

export const Separator = styled.li`
  border-top: 1px solid ${(props) => props.theme.colors.primary + 'BF'};
  ${optionPadding}
  margin-top: 6px;
  margin-bottom: 6px;
`
export const Section = styled.li``

export const Heading = styled.span`
  display: inline-block;
  font-weight: bold;
  ${optionPadding}
  margin-bottom: 4px;
`

export const UlSection = styled.ul`
  padding: 0;
  list-style: none;
`
