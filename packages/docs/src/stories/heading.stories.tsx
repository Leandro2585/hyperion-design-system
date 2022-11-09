import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@hyperion-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'H2 Heading',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default the heading will always be an `h2`, but we can change this with the `as` property',
      },
    },
  },
}
