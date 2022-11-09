import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  resize: 'vertical',
  minHeight: 40,
  alignItems: 'baseline',
  '&:focus': {
    outline: 0,
    borderColor: '$hype300',
  },
  '&:disabled': {
    opacity: 0.5,
    borderColor: '$hype300',
    cursor: 'not-allowed',
  },
  '&:placeholder': {
    color: '$hype300',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'
