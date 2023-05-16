import { Item, Section } from 'react-stately'
import type { Meta, StoryObj } from '@storybook/react'

import { ListBox } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ListBox> = {
  title: 'Client/Collections/ListBox',
  component: ListBox,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof ListBox>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  args: {
    label: 'Example list box',
    selectionMode: 'single',
    children: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'].map((item) => (
      <Item key={item}>{item}</Item>
    )),
    disabledKeys: ['A', 'B'],
    defaultSelectedKeys: ['C'],
  },
}

export const SectionListBox: Story = {
  args: {
    label: 'Example section list box',
    selectionMode: 'multiple',
    children: [
      <Section key="veggies" title="Veggies">
        <Item key="lettuce">Lettuce</Item>
        <Item key="tomato">Tomato</Item>
        <Item key="onion">Onion</Item>
      </Section>,
      <Section key="protein" title="Protein">
        <Item key="ham">Ham</Item>
        <Item key="tuna">Tuna</Item>
        <Item key="tofu">Tofu</Item>
      </Section>,
      <Section key="condiments" title="Condiments">
        <Item key="mayo">Mayonaise</Item>
        <Item key="mustard">Mustard</Item>
        <Item key="ranch">Ranch</Item>
      </Section>,
    ],
  },
}
