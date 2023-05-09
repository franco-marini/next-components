'use client'

import React, { useRef } from 'react'
import { useButton } from 'react-aria'

import { Headline } from './styles'
import { ButtonProps } from './types'

const Button = ({ primary, label, backgroundColor, size, ...props }: ButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(props, ref)

  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'

  return (
    <button {...buttonProps} ref={ref}>
      {label}
    </button>
  )
}

export default Button
