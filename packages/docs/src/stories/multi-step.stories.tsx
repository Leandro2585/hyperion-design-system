import { Box, MultiStep, MultiStepProps } from '@hyperion-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    totalSteps: 5,
    currentStep: 1,
  },
  decorators: [
    (Story) => (
      <Box css={{ display: 'flex', flexDirection: 'column' }}>{Story()}</Box>
    ),
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 5,
  },
}
