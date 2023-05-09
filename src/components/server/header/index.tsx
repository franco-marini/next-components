import React from 'react'

import * as S from './styles'
import { HeaderProps } from './types'

function Header({ user }: HeaderProps) {
  return (
    <S.Header>
      <S.LogoDiv>
        <h1>
          FOSTERING <span>PETs</span>
        </h1>
      </S.LogoDiv>
      {user.firstName !== '' ? (
        <span>
          Welcome,{' '}
          <b>
            {user.firstName} {user.lastName}
          </b>
          !
        </span>
      ) : (
        <></>
      )}
    </S.Header>
  )
}

export default Header
