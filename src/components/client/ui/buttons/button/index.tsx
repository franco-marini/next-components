'use client'

import React, { useRef } from 'react'
import { useButton } from 'react-aria'

import styles from './button.module.css'
import { Headline } from './styles'
import { ButtonProps } from './types'

const Button = ({ primary, label, backgroundColor, size, ...props }: ButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(props, ref)

  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'

  return (
    <button
      {...buttonProps}
      // className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      ref={ref}
    >
      {label}
      {/* <Headline>{label}</Headline> */}
    </button>
  )
}

export default Button
