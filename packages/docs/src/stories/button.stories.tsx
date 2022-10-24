import { Button, ButtonProps } from '@hyperion-ui/react/dist'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Small: StoryObj<ButtonProps> = {
  args: {},
}

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
  },
}
