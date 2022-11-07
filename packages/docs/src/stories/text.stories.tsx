import { Text, TextProps } from '@hyperion-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Example Text',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: { children: 'As Strong', as: 'strong' },
}
