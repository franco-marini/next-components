import React from 'react'

import { SHeader, SLogo } from './styles'

function Header() {
  return (
    <SHeader>
      <SLogo>
        <h1>Fostering pet</h1>
      </SLogo>
      <span>
        Welcome, <b>Titi</b>!
      </span>
    </SHeader>
  )
}

export default Header
