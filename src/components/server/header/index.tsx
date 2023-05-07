import Image from 'next/image'
import React from 'react'

import { SHeader, SLogo } from './styles'

function Header() {
  return (
    <SHeader>
      <SLogo>
        <Image src="/images/logo.png" alt="logo image" width={150} height={75} />
      </SLogo>
      <span>
        Welcome, <b>Pilot</b>!
      </span>
    </SHeader>
  )
}

export default Header
