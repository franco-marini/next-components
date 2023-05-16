import styled, { css } from 'styled-components'

import { Label } from '../../texts'

export const optionPadding = css`
  padding: 2px 6px;
`

export const ListBoxLabel = styled(Label)`
  font-size: 1.6rem;
`

export const Ul = styled.ul`
  margin: 4px 0 0;
  padding: 4px 0;
  border-radius: 8px;
  list-style: none;
  border: 2px solid ${(props) => props.theme.colors.primary};
  max-height: 100px;
  overflow: auto;
`
