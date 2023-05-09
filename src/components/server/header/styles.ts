'use client'

import styled from 'styled-components'

export const Header = styled.header`
  position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  box-shadow: 0px 6px 10px 1px ${(props) => props.theme.colors.shadow};
  background-color: ${(props) => props.theme.colors.background};
  span {
    color: ${(props) => props.theme.colors.font};
  }
`

export const LogoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  h1 {
    font-size: ${(props) => props.theme.typography.size.h1};
    color: ${(props) => props.theme.colors.primary};

    span {
      font-size: ${(props) => props.theme.typography.size.h1};
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`
