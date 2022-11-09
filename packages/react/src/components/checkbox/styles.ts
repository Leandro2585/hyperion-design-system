import * as Checkbox from '@radix-ui/react-checkbox'
import { styled, keyframes } from '../../styles'

const slideIn = keyframes({
  from: {
    opacity: 0.2,
    transform: 'translateY(-100%)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
    opacity: 1,
  },
  to: {
    transform: 'translateY(-100%)',
    opacity: 0.2,
  },
})

export const CheckBoxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray900',
  '&:focus': {
    border: '2px solid $hype300',
  },
  '&[data-state="checked"]': {
    backgroundColor: '$hype300',
  },
})

export const CheckBoxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',
  '&[data-state="checked"]': {
    animation: `${slideIn} 100ms ease-out`,
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 100ms ease-out`,
  },
})
