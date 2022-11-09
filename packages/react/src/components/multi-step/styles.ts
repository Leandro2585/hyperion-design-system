import { styled } from '../../styles'
import { Text } from '../text'

export const MultiStepContainer = styled('div', {})

export const Label = styled(Text, {
  color: '$gray200',
  defaultVariants: {
    size: 'xs',
  },
})

export const Steps = styled('div', {
  display: 'grid',
  gap: '$2',
  marginTop: '$1',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
})

export const Step = styled('div', {
  height: '$1',
  borderRadius: '$px',
  backgroundColor: '$gray600',
  variants: {
    active: {
      true: {
        backgroundColor: '$hype300',
      },
    },
  },
})
