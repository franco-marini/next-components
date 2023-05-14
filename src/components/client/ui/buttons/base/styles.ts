import styled, { css } from 'styled-components'

import { StyledButtonProps } from './types'

export const variants = {
  outlined: css<StyledButtonProps>`
    color: ${(props) => props.theme.colors[props.color]};
    border-color: ${(props) => props.theme.colors[props.color]};
  `,

  contained: css<StyledButtonProps>`
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors[props.color]};
  `,

  text: css<StyledButtonProps>`
    color: ${(props) => props.theme.colors[props.color]};
  `,
}

export const Button = styled.button<StyledButtonProps>`
  border-radius: 8px;
  padding: 8px 10px;
  background-color: transparent;
  border: 2px solid transparent;
  font-size: ${(props) => props.theme.typography.size.body};

  :hover {
    cursor: pointer;
    opacity: 0.7;
  }

  :active {
    transform: translateY(1.5px);
  }

  ${(props) => variants[props.variant]}
`
